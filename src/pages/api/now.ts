import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = () => {
  const now = {
    updated: "2026-03-30",
    location: "India (Easter break). Bengaluru in April for YC Startup School.",
    building: [
      "MEng Thesis — AI for Fetal Heart Ultrasound at Imperial",
      "abhivir.com — programmable digital home",
      "Hathin Village — AI and WhatsApp automation for governance and schools",
    ],
    reading: [
      "Designing Data-Intensive Applications — Martin Kleppmann",
    ],
    thinking: [
      "AI agents for India's underserved populations",
      "Finding a co-founder who complements what I'm good at",
      "What the first product should be after graduation",
    ],
  };

  return new Response(JSON.stringify(now), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};
