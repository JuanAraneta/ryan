import { SEOMetadata } from "@/components/SEOMetadata/SEOMetadata";
import { contentClient, isPreviewMode } from "@/lib/contentful/contentClient";
import { notFound } from "next/navigation";
import { readFragment } from "gql.tada";
import { SEOMetadataFragment } from "@/lib/contentful/fragments/SEOMetadataFragment";
import { Lato } from "next/font/google";
import { ConstantsProvider } from "@/components/providers/ConstantsContext";
import { ConstantsFragment } from "@/lib/contentful/fragments/ConstantsFragment";
import { ContentfulLivePreviewScript } from "@/components/ContentfulLivePreviewScript";
import { routingUtils } from "@/lib/util/routingUtils";
import { getConstants } from "@/lib/contentful/utils/getConstants";
import { GetLayoutById } from "@/lib/contentful/query/GetLayoutByIdQuery";
import { Footer } from "@/components/Footer";

const latoSans = Lato({
  variable: "--font-sans",
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin", "latin-ext"],
});

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ slug?: string | Array<string> }>;
}) {
  const preview = await isPreviewMode();

  const [{ layout, market }, constants] = await Promise.all([
    routingUtils
      .getPathFromProps(props)
      .then((path) => routingUtils.getMarketFromPath(path))
      .then(async ({ path, market }) => ({
        pageEntry: await routingUtils.getPageEntryByPath(path, market),
        market,
      }))
      .then(async ({ pageEntry, market }) => {
        if (!pageEntry?.sys.id) return { layout: null, market: null };
        return {
          layout: (
            await contentClient.query(GetLayoutById, { id: pageEntry.sys.id })
          ).data?.layout,
          market,
        };
      }),
    getConstants(),
  ]);

  if (!layout || !market || !constants) notFound();

  if (!constants)
    throw new Error(
      "Constants instance is required for application, but not found!",
    );

  return (
    <ConstantsProvider value={readFragment(ConstantsFragment, constants)}>
      <head>
        {layout.seoMetadata && (
          <SEOMetadata
            metadata={readFragment(SEOMetadataFragment, layout.seoMetadata)}
          />
        )}
      </head>
      <body className={latoSans.variable}>
        <main className="min-h-screen">
          {/* Render header/menu for page.market here */}
          {props.children}
          <Footer market={market} />
          {preview && <ContentfulLivePreviewScript />}
        </main>
      </body>
    </ConstantsProvider>
  );
}
