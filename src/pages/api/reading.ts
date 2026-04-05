import type { APIRoute } from "astro";
import { books, technicalReading } from "../../data/reading";

export const prerender = false;

export const GET: APIRoute = () => {
  return new Response(JSON.stringify({ books, technicalReading }), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};
