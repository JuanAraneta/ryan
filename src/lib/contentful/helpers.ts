import { IMarketFields, IPage, IPageFields } from "@/models/contentful";

export const generateSitemap = (pages: IPage[]) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://ryan.com";
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap-image/1.1">
    ${pages
      .map((page) => {
        const fields = page.fields as IPageFields;
        const marketSlug = (fields.market?.fields as IMarketFields).slug;
        const locale = page.sys.locale; // Assuming locales like "en-US", "es-AR"

        const slug = fields.slug;
        const path = slug === "home" ? "" : slug;

        return `
        <url>
          <loc>${`${baseUrl}/${marketSlug}/${locale}${path ? `/${path}` : ""}`}</loc>
          <lastmod>${new Date(page.sys.updatedAt).toISOString()}</lastmod>
        </url>
      `;
      })
      .join("")}
  </urlset>`;
};
