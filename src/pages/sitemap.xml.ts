import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const SITE = "https://abhivir.com";

// Routes worth indexing. /activate-india and /fyp-presentation stay out, as in robots.txt.
const staticRoutes = [
  { path: "/", priority: "1.0" },
  { path: "/work/", priority: "0.9" },
  { path: "/work/data-pilot/", priority: "0.7" },
  { path: "/work/adcraft/", priority: "0.7" },
  { path: "/work/pintos-wacc/", priority: "0.7" },
  { path: "/highlights/", priority: "0.8" },
  { path: "/blog/", priority: "0.8" },
  { path: "/now/", priority: "0.7" },
  { path: "/contact/", priority: "0.6" },
];

export const GET: APIRoute = async () => {
  const posts = await getCollection("blog");
  const urls = [
    ...staticRoutes.map((r) => ({ loc: `${SITE}${r.path}`, priority: r.priority, lastmod: undefined })),
    ...posts
      .filter((post) => post.data.description)
      .map((post) => ({
        loc: `${SITE}/blog/${post.id}/`,
        priority: "0.6",
        lastmod: post.data.date,
      })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url><loc>${u.loc}</loc>${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ""}<priority>${u.priority}</priority></url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
