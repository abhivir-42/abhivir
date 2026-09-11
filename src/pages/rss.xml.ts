import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const SITE = "https://abhivir.com";

const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export const GET: APIRoute = async () => {
  // Posts with no description are placeholders kept reachable for old links.
  const posts = (await getCollection("blog"))
    .filter((post) => post.data.description)
    .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

  const items = posts
    .map(
      (post) => `    <item>
      <title>${escape(post.data.title)}</title>
      <link>${SITE}/blog/${post.id}/</link>
      <guid isPermaLink="true">${SITE}/blog/${post.id}/</guid>
      <description>${escape(post.data.description)}</description>
      <pubDate>${new Date(post.data.date).toUTCString()}</pubDate>
    </item>`,
    )
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Abhivir Singh</title>
    <link>${SITE}/</link>
    <description>Writing on AI agents and the systems around them.</description>
    <language>en-gb</language>
    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(body, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
};
