import { Hero } from "@/modules/Hero/Hero";
import { SEOMetadata } from "@/components/SEOMetadata/SEOMetadata";
import { contentClient, isPreviewMode } from "@/lib/contentful/contentClient";
import { notFound } from "next/navigation";
import { readFragment } from "gql.tada";
import { SEOMetadataFragment } from "@/lib/contentful/fragments/SEOMetadataFragment";
import { Lato } from "next/font/google";
import { ConstantsProvider } from "@/components/providers/ConstantsContext";
import { GetConstantsQuery } from "@/lib/contentful/query/GetConstantsQuery";
import { ConstantsFragment } from "@/lib/contentful/fragments/ConstantsFragment";
import { ContentfulLivePreviewScript } from "@/components/ContentfulLivePreviewScript";
import { routingUtils } from "@/lib/util/routingUtils";
import { GetPageLayoutDataByIdQuery } from "@/lib/contentful/query/GetPageLayoutDataByIdQuery";

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

  const path = await routingUtils.getPathFromProps(props);
  const id = await routingUtils.getPageIdByPath(path);

  if (!id) notFound();

  const [pageResult, constantsResult] = await Promise.all([
    contentClient.query(GetPageLayoutDataByIdQuery, { id }),
    contentClient.query(GetConstantsQuery, {}),
  ]);

  const page = pageResult.data?.page;
  const constants = constantsResult.data?.constantsCollection?.items[0];

  if (!page) notFound();

  if (!constants)
    throw new Error(
      "Constants instance is required for application, but not found!",
    );

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
          {/* Render header/menu for page.market here */}
          {props.children}
          {/* Render footer for page.market here */}
          {preview && <ContentfulLivePreviewScript />}
        </main>
      </body>
    </ConstantsProvider>
  );
}
