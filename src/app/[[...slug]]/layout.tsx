import { Header } from "@/modules/Header/Header";
import { Footer } from "@/modules/Footer/Footer";
import { SEOMetadata } from "@/components/SEOMetadata/SEOMetadata";
import { contentClient } from "@/lib/contentful/contentClient";
import { GetPageBySlugAndMarketQuery } from "@/lib/contentful/query/GetPageBySlugAndMarketQuery";
import { notFound } from "next/navigation";
import { readFragment } from "gql.tada";
import { SEOMetadataFragment } from "@/lib/contentful/fragments/SEOMetadataFragment";
import { FooterFragment } from "@/lib/contentful/fragments/FooterFragment";
import { HeaderFragment } from "@/lib/contentful/fragments/HeaderFragment";

export default async function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
    params: Promise<{ slug: string[] }>;
  }>
) {
  const params = await props.params;
  const slugs = Array.isArray(params.slug) ? params.slug : [params.slug];

  const [marketSlug, locale, slug] = slugs;
  const pageResult = await contentClient.query(GetPageBySlugAndMarketQuery, {
    marketSlug,
    locale,
    slug,
  });

  const page = pageResult.data?.pageCollection?.items[0];

  if (!page) notFound();

  return (
    <>
      <head>
        {page.seoMetadata && (
          <SEOMetadata
            metadata={readFragment(SEOMetadataFragment, page.seoMetadata)}
          />
        )}
      </head>
      <body>
        <main className="min-h-screen">
          {page.header && (
            <Header data={readFragment(HeaderFragment, page.header)} />
          )}
          {props.children}
          {page.footer && (
            <Footer data={readFragment(FooterFragment, page.footer)} />
          )}
        </main>
      </body>
    </>
  );
}
