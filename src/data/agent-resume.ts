import { compiledContent, frontmatter, rawContent } from "./agent-resume.md";

const updated = String(frontmatter.updated);

const updatedLong = new Date(`${updated}T00:00:00Z`).toLocaleDateString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

const fill = (s: string) => s.replaceAll("{{updated}}", updatedLong);

/** Markdown exactly as an agent receives it, from the Copy button or /resume.md. */
const markdown = `${fill(rawContent()).trim()}\n`;

export const agentResume = {
  published: frontmatter.published === true,
  updated,
  updatedLong,
  markdown,
  html: fill(await compiledContent()),
  words: markdown.split(/\s+/).filter(Boolean).length,
};
