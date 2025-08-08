import { Hero } from "@/modules/Hero/Hero";
import { Footer } from "@/modules/Footer/Footer";
import { SEOMetadata } from "@/components/SEOMetadata/SEOMetadata";
import { contentClient, isPreviewMode } from "@/lib/contentful/contentClient";
import { GetPageBySlugAndMarketQuery } from "@/lib/contentful/query/GetPageBySlugAndMarketQuery";
import { notFound } from "next/navigation";
import { readFragment } from "gql.tada";
import { SEOMetadataFragment } from "@/lib/contentful/fragments/SEOMetadataFragment";
import { FooterFragment } from "@/modules/Footer/FooterFragment";
import { HeroFragment } from "@/modules/Hero/HeroFragment";
import { Lato } from "next/font/google";
import { ConstantsProvider } from "@/components/providers/ConstantsContext";
import { GetConstantsQuery } from "@/lib/contentful/query/GetConstantsQuery";
import { ConstantsFragment } from "@/lib/contentful/fragments/ConstantsFragment";
import { ContentfulLivePreviewScript } from "@/components/ContentfulLivePreviewScript";

const latoSans = Lato({
  variable: "--font-sans",
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
});

export default async function RootLayout(
  props: Readonly<{
    children: React.ReactNode;
    params: Promise<{ slug: string[] }>;
  }>,
) {
  const params = await props.params;
  const slugs = Array.isArray(params.slug) ? params.slug : [params.slug];
  const preview = await isPreviewMode();

  const [marketSlug, locale, slug] = slugs;

  const [pageResult, constantsResult] = await Promise.all([
    contentClient.query(GetPageBySlugAndMarketQuery, {
      marketSlug,
      locale,
      slug,
    }),
    contentClient.query(GetConstantsQuery, { locale }),
  ]);

  const page = pageResult.data?.pageCollection?.items[0];
  const constants = constantsResult.data?.constantsCollection?.items[0];

  if (!page || !constants) notFound();

  return (
    <ConstantsProvider value={readFragment(ConstantsFragment, constants)}>
      <head>
        {page.seoMetadata && (
          <SEOMetadata
            metadata={readFragment(SEOMetadataFragment, page.seoMetadata)}
          />
        )}
      </head>
      <body className={latoSans.variable}>
        <main className="min-h-screen">
          {page.hero && <Hero data={readFragment(HeroFragment, page.hero)} />}
          {props.children}
          {page.footer && (
            <Footer data={readFragment(FooterFragment, page.footer)} />
          )}
          {preview && <ContentfulLivePreviewScript />}
        </main>
      </body>
    </ConstantsProvider>
  );
}
