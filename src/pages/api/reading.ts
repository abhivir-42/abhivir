import type { APIRoute } from "astro";
import { reading } from "../../data/reading";

export const prerender = false;

export const GET: APIRoute = () => {
  return new Response(JSON.stringify(reading), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};
