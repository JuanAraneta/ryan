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
import { GetComponentPageCoreById } from "@/lib/contentful/query/GetComponentPageCoreById";

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

  const [{ page, componentPageCore }, constants] = await Promise.all([
    routingUtils
      .getPathFromProps(props)
      .then((path) => routingUtils.getPageByPath(path))
      .then(async (page) => {
        const componentPageCore = page?.componentPageCore?.sys.id
          ? (
              await contentClient.query(GetComponentPageCoreById, {
                id: page?.componentPageCore?.sys.id,
              })
            ).data?.componentPageCore
          : null;
        return { page, componentPageCore };
      }),
    getConstants(),
  ]);

  if (!page || !componentPageCore) notFound();

  if (!constants)
    throw new Error(
      "Constants instance is required for application, but not found!",
    );

  return (
    <ConstantsProvider value={readFragment(ConstantsFragment, constants)}>
      <head>
        {componentPageCore.seoMetadata && (
          <SEOMetadata
            metadata={readFragment(
              SEOMetadataFragment,
              componentPageCore.seoMetadata,
            )}
          />
        )}
      </head>
      <body className={latoSans.variable}>
        <main className="min-h-screen">
          {/* Render header/menu for page.market here */}
          {props.children}
          {/* Render footer for page.market here */}
          {preview && <ContentfulLivePreviewScript />}
        </main>
      </body>
    </ConstantsProvider>
  );
}
