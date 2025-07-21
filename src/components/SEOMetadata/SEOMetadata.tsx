import { SEOMetadataFragment } from "@/lib/contentful/fragments/SEOMetadataFragment";
import { ResultOf } from "gql.tada";
import { FC } from "react";

interface SEOMetadataProps {
  metadata: ResultOf<typeof SEOMetadataFragment>;
}

export const SEOMetadata: FC<SEOMetadataProps> = ({ metadata }) => (
  <>
    <title>{metadata.pageTitle}</title>
    <link rel="icon" href="path/to/favicon.ico" />

    {metadata.seoDescription && (
      <meta name="description" content={metadata.seoDescription} />
    )}
    <meta name="keywords" content="keyword1, keyword2, keyword3" />

    {metadata.seoTitle && (
      <meta property="og:title" content={metadata.seoTitle} />
    )}
    {metadata.seoDescription && (
      <meta property="og:description" content={metadata.seoDescription} />
    )}
    {metadata.featuredImage?.url && (
      <meta property="og:image" content={metadata.featuredImage.url} />
    )}

    <meta
      name="robots"
      content={[metadata.noIndex && "noindex", metadata.noFollow && "nofollow"]
        .filter(Boolean)
        .join(", ")}
    />
  </>
);
