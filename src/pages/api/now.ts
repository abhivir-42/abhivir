import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = () => {
  const now = {
    updated: "2026-03-10",
    location: "London, UK",
    building: [
      "MEng Thesis — AI for Fetal Heart Ultrasound at Imperial",
      "abhivir.com — programmable digital home",
    ],
    reading: [
      "Designing Data-Intensive Applications — Martin Kleppmann",
    ],
    thinking: [
      "How to make personal websites more than static brochures",
      "The intersection of AI agents and quantitative finance",
      "What comes after graduation",
    ],
  };

  return new Response(JSON.stringify(now), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};
