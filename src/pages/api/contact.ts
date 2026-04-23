import type { APIRoute } from "astro";

export const prerender = false;

// This endpoint sends contact form submissions to Abhivir's email via Resend.
// To enable delivery, set RESEND_API_KEY in Cloudflare Pages environment variables.
// Get a free API key at https://resend.com (3,000 emails/month free).
// Without the key, submissions are logged and the user still sees a success message.

const TO_EMAIL = "as9422@ic.ac.uk";
const FROM_EMAIL = "contact@abhivir.com"; // must be a verified domain in Resend

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  message?: unknown;
}

export const POST: APIRoute = async ({ request, locals }) => {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const rawName = typeof payload.name === "string" ? payload.name.trim() : "";
  const rawEmail = typeof payload.email === "string" ? payload.email.trim() : "";
  const rawMessage = typeof payload.message === "string" ? payload.message.trim() : "";

  // Message is required; name and email are optional
  if (!rawMessage) {
    return new Response(JSON.stringify({ error: "Message is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Sanity limits to prevent abuse
  if (rawName.length > 200 || rawEmail.length > 200 || rawMessage.length > 5000) {
    return new Response(JSON.stringify({ error: "Field too long" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const name = rawName || "Anonymous";
  const email = rawEmail || undefined;
  const message = rawMessage;

  // Read API key from Cloudflare Pages environment (via locals.runtime.env)
  // @ts-expect-error — Cloudflare runtime types injected at deploy time
  const apiKey = locals.runtime?.env?.RESEND_API_KEY;

  if (apiKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to: TO_EMAIL,
          ...(email ? { reply_to: email } : {}),
          subject: `[abhivir.com] Message from ${name}`,
          text: `From: ${name}${email ? ` <${email}>` : ""}\n\n${message}`,
        }),
      });

      if (!res.ok) {
        const body = await res.text();
        console.error("Resend API error:", res.status, body);
        return new Response(JSON.stringify({ error: "Delivery failed" }), {
          status: 502,
          headers: { "Content-Type": "application/json" },
        });
      }
    } catch (err) {
      console.error("Resend fetch failed:", err);
      return new Response(JSON.stringify({ error: "Delivery failed" }), {
        status: 502,
        headers: { "Content-Type": "application/json" },
      });
    }
  } else {
    // No API key configured — log the submission so it shows up in
    // Cloudflare Pages function logs. Set RESEND_API_KEY to enable delivery.
    console.log("[contact form submission]", { name, email, message });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
