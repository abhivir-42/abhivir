import type { APIRoute } from "astro";
import { work } from "../../data/work";

export const prerender = false;

export const GET: APIRoute = () => {
  return new Response(JSON.stringify(work), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};
