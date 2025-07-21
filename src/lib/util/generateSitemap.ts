import { contentClient } from '../contentful/contentClient';
import { GetAllPagesQuery } from '../contentful/query/GetAllPagesQuery';

export const generateSitemap = async () => {
  // TODO - make this call recurse if we hit the limit size
  const pagesResult = await contentClient.query(GetAllPagesQuery, {});

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ryan.com';
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap-image/1.1">
    ${pagesResult.data?.pageCollection?.items
      .map((page) => {
        if (!page) return null;

        const path = page.slug === 'home' ? '' : page.slug;

        return `
        <url>
          <loc>${`${baseUrl}/${page.market?.slug}/${page.sys.locale}${path ? `/${path}` : ''}`}</loc>
          <lastmod>${new Date(page.sys.publishedAt!).toISOString()}</lastmod>
        </url>
      `;
      })
      .filter(Boolean)
      .join('')}
  </urlset>`;
};
