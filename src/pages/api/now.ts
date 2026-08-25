import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = () => {
  const now = {
    updated: "2026-08-25",
    location: "Faridabad, India.",
    building: [
      "AI agents and the harnesses around them: rebuilding what I shipped at Fetch.ai, properly",
      "The family forging business outside Delhi",
      "abhivir.com: programmable digital home",
    ],
    reading: [
      "Designing Data-Intensive Applications, Martin Kleppmann",
    ],
    thinking: [
      "Where to do the next serious thing, and who to do it with",
      "Finding a co-founder who complements what I'm good at",
      "What the first product should be",
    ],
  };

  return new Response(JSON.stringify(now), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};
