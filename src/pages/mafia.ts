import type { APIRoute } from "astro";
// The game itself. Source of truth: ~/learning/mafia/index.html, copied here by its deploy.sh.
import game from "../mafia/game.html?raw";

export const prerender = false;

// abhivir.com/mafia is a private party game. This repo is public, so neither the
// password nor the link key is written here, only a SHA-256 of the key.
// Key = first 16 hex chars of sha256("mafia-table:" + lowercase password).
const KEY_HASH = "305afc0eb3db85798595e618c5b2d86307952c6d1d3668c80574e82a514bff79";
const COOKIE = "mafia_key";
const SIXTY_DAYS = 60 * 60 * 24 * 60;

const baseHeaders = {
  "Content-Type": "text/html; charset=utf-8",
  "Cache-Control": "no-store",
  "X-Robots-Tag": "noindex, nofollow",
  "Referrer-Policy": "no-referrer",
};

async function sha256(text: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

async function keyFromPassword(password: string): Promise<string> {
  return (await sha256("mafia-table:" + password.trim().toLowerCase())).slice(0, 16);
}

async function isValid(key: string | null | undefined): Promise<boolean> {
  return !!key && /^[0-9a-f]{16}$/.test(key) && (await sha256(key)) === KEY_HASH;
}

function keyCookie(key: string): string {
  return `${COOKIE}=${key}; Path=/mafia; Max-Age=${SIXTY_DAYS}; HttpOnly; Secure; SameSite=Lax`;
}

function serveGame(key: string, setCookie: boolean): Response {
  const headers = new Headers(baseHeaders);
  if (setCookie) headers.set("Set-Cookie", keyCookie(key));
  return new Response(game.replace("/*MAFIA_KEY*/''", JSON.stringify(key)), { headers });
}

function gate(wrong: boolean): Response {
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow"><title>Mafia</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Limelight&family=Special+Elite&display=swap" rel="stylesheet">
<style>
:root{--bg:#0e0b09;--card:#1a1410;--line:#4a3b2c;--ink:#f3e9d6;--muted:#a8977e;--red:#d42a3a;--red2:#8e1220;--gold:#d9ad55}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;background:var(--bg);color:var(--ink);font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;display:grid;place-items:center;padding:16px}
main{width:100%;max-width:380px;text-align:center}
h1{font-family:'Limelight',Georgia,serif;font-weight:400;font-size:64px;letter-spacing:.06em;margin:0;text-shadow:0 3px 0 var(--red2)}
p{font-family:'Special Elite','Courier New',monospace;color:var(--muted);margin:10px 0 24px}
form{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:16px;text-align:left}
label{display:block;font:700 12px/1 sans-serif;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);margin-bottom:8px}
input{width:100%;padding:14px;border-radius:12px;border:1px solid var(--line);background:#120e0b;color:var(--ink);font:600 18px sans-serif;outline:none}
input:focus{border-color:var(--gold)}
button{width:100%;margin-top:12px;padding:15px;border-radius:12px;border:1px solid #e04a55;background:linear-gradient(180deg,#d8323f,#a3141f);color:#fff;font:600 17px sans-serif;cursor:pointer}
.err{color:#ff8f8f;font:600 14px sans-serif;margin:10px 0 0}
</style></head><body><main>
<h1>MAFIA</h1><p>This table is private. Got a password?</p>
<form method="post"><label for="pw">Password</label>
<input id="pw" name="password" type="password" autocomplete="current-password" autofocus required>
${wrong ? '<div class="err">That is not it.</div>' : ""}
<button type="submit">Come in</button></form>
</main></body></html>`;
  return new Response(html, { status: 401, headers: baseHeaders });
}

export const GET: APIRoute = async ({ url, cookies }) => {
  const fromLink = url.searchParams.get("k");
  if (await isValid(fromLink)) return serveGame(fromLink!, true);
  const fromCookie = cookies.get(COOKIE)?.value;
  if (await isValid(fromCookie)) return serveGame(fromCookie!, false);
  return gate(false);
};

export const POST: APIRoute = async ({ request, url }) => {
  const form = await request.formData();
  const key = await keyFromPassword(String(form.get("password") ?? ""));
  if (!(await isValid(key))) return gate(true);
  return new Response(null, {
    status: 303,
    headers: { Location: url.pathname + url.search, "Set-Cookie": keyCookie(key), "Cache-Control": "no-store" },
  });
};
