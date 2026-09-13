import type { APIRoute } from "astro";
import { agentResume } from "../data/agent-resume";

// Served by a function rather than as a static file so the content type and
// the noindex header are ours, not whatever the host guesses from ".md".
export const prerender = false;

export const GET: APIRoute = () =>
  new Response(agentResume.markdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=300",
      "Access-Control-Allow-Origin": "*",
      ...(agentResume.published ? {} : { "X-Robots-Tag": "noindex" }),
    },
  });
