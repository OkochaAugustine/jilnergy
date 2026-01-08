import Parser from "rss-parser";
import fs from "fs";
import path from "path";

const parser = new Parser({
  timeout: 10000,
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36",
    Accept: "application/rss+xml,application/xml,text/xml",
  },
});

const NIGERIA_KEYWORDS = [
  "nigeria", "lagos", "abuja", "africa", "grid", "diesel",
  "power", "generator", "solar", "panels", "renewable", "battery",
  "inverter", "installation", "rooftop", "efficiency",
];

const FEEDS = [
  { url: "https://www.solarreviews.com/blog/rss", category: "Tips" },
  { url: "https://news.energysage.com/feed/", category: "Case Studies" },
  { url: "https://www.pv-magazine.com/feed/", category: "Solar News" },
  { url: "https://www.solarpowerworldonline.com/feed/", category: "Solar News" },
];

const CACHE_FILE = path.join(process.cwd(), "data", "articles.json");

// Fallback demo post
const DEMO_POSTS = [
  {
    title: "Sample Nigeria Solar News",
    slug: "sample-nigeria-solar-news",
    content: "This is a placeholder article in case feeds fail.",
    date: new Date().toISOString(),
    link: "#",
    category: "Solar News",
    source: "Demo",
    nigeria: true,
    image: "/demo/default.jpg",
  },
];

// Attempt to extract first image from item.content using regex
function extractImageFromContent(content) {
  if (!content) return null;
  const match = content.match(/<img[^>]+src=["'](http[^"']+)["']/i);
  return match ? match[1] : null;
}

export async function getSolarBlogs() {
  const posts = [];

  for (const feed of FEEDS) {
    try {
      const data = await parser.parseURL(feed.url);
      if (!data?.items?.length) continue;

      for (const item of data.items) {
        const rawContent = item.contentSnippet || item.content || "";
        const content = rawContent.toLowerCase();

        const nigeriaRelevant = NIGERIA_KEYWORDS.some((k) =>
          content.includes(k)
        );

        // Determine image: enclosure -> regex from content -> fallback
        const image =
          item.enclosure?.url ||
          extractImageFromContent(item.content) ||
          "/demo/default.jpg";

        posts.push({
          title: item.title ?? "Untitled",
          slug: (item.title || "")
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .slice(0, 80),
          content: rawContent,
          image,
          date: item.pubDate || new Date().toISOString(),
          link: item.link || "#",
          category: feed.category,
          source: data.title || "Unknown Source",
          nigeria: nigeriaRelevant,
        });
      }
    } catch (err) {
      console.warn("RSS feed skipped:", feed.url);
      continue;
    }
  }

  if (!posts.length) {
    console.warn("All RSS feeds failed. Using demo post.");
    posts.push(...DEMO_POSTS);
  }

  // Save cache
  try {
    fs.writeFileSync(CACHE_FILE, JSON.stringify(posts, null, 2));
  } catch (err) {
    console.error("Failed to write cache:", err);
  }

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Load cached articles
export function getCachedBlogs() {
  try {
    const data = fs.readFileSync(CACHE_FILE, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.warn("Cache not found or invalid. Using empty array.");
    return [];
  }
}
