import { getAllPages } from "@/lib/contentful/getAllPages"; // Your Contentful API call
import { generateSitemap } from "@/lib/contentful/helpers"; // Your custom sitemap generator

export async function GET() {
  const pages = await getAllPages();
  const sitemap = generateSitemap(pages);

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600", // Cache for 1 hour
    },
  });
}
