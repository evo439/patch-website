import { SITE } from "../config/theme.config.ts";
import { getCollection } from "astro:content";

const BASE_URL = SITE.url || "";

export async function GET() {
  const staticEntries = [
    { path: "/", changefreq: "weekly", priority: "1.0" },
    { path: "/shows", changefreq: "weekly", priority: "0.9" },
    { path: "/music", changefreq: "monthly", priority: "0.8" },
    { path: "/gallery", changefreq: "monthly", priority: "0.8" },
    { path: "/contact", changefreq: "monthly", priority: "0.7" },
  ];

  let customPages = [];
  try {
    customPages = await getCollection("pages");
  } catch {
    customPages = [];
  }
  const customEntries = customPages.map((page) => ({
    path: `/${page.id}`,
    changefreq: "monthly",
    priority: "0.7",
  }));

  const entries = [...staticEntries, ...customEntries];

  const urls = entries.map((entry) =>
    [
      "  <url>",
      `    <loc>${BASE_URL}${entry.path}</loc>`,
      entry.changefreq ? `    <changefreq>${entry.changefreq}</changefreq>` : null,
      entry.priority ? `    <priority>${entry.priority}</priority>` : null,
      "  </url>",
    ]
      .filter(Boolean)
      .join("\n"),
  );

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    "</urlset>",
  ].join("\n");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
