import type { APIRoute } from "astro";
import { agentResume } from "../data/agent-resume";

// llms.txt (llmstxt.org): a short map of the site for language models.
export const GET: APIRoute = () => {
  const lines = [
    "# Abhivir Singh",
    "",
    "> Builds AI agent systems and the harnesses underneath them. MEng Computing (Artificial Intelligence and Machine Learning), Imperial College London, First Class Honours.",
    "",
  ];

  if (agentResume.published) {
    lines.push(
      "## Start here",
      "",
      `- [Long-form resume, in Markdown](https://abhivir.com/resume.md): everything about his work, study and background, written to be read whole. Updated ${agentResume.updated}.`,
      "",
    );
  }

  lines.push(
    "## Pages",
    "",
    "- [Work](https://abhivir.com/work/): projects, with detail pages for the larger ones",
    "- [Writing](https://abhivir.com/blog/): posts",
    "- [Now](https://abhivir.com/now/): what he is working on",
    "- [Contact](https://abhivir.com/contact/)",
    "",
  );

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
