import { graphql } from "gql.tada";

export const SEOMetadataFragment = graphql(`
  fragment SEOMetadataFragment on SeoMetadata {
    pageTitle
    seoTitle
    seoDescription
    featuredImage {
      url
    }
    noFollow
    noIndex
  }
`);
