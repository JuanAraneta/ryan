import { FC } from "react";
import { ISeoMetadataFields } from "@/models/contentful";

interface SEOMetadataProps {
  metadata: ISeoMetadataFields;
}

export const SEOMetadata: FC<SEOMetadataProps> = ({
  metadata,
}: {
  metadata: ISeoMetadataFields;
}) => {
  return (
    <>
      <title>{metadata.pageTitle}</title>
      <link rel="icon" href="path/to/favicon.ico" />

      <meta name="description" content={metadata.seoDescription} />
      <meta name="keywords" content="keyword1, keyword2, keyword3" />

      <meta property="og:title" content={metadata.seoTitle} />
      <meta property="og:description" content={metadata.seoDescription} />
      <meta
        property="og:image"
        content={metadata.featuredImage.fields.file?.url as string}
      />

      <meta
        name="robots"
        content={[
          metadata.noIndex && "noindex",
          metadata.noFollow && "nofollow",
        ]
          .filter(Boolean)
          .join(", ")}
      />
    </>
  );
};
