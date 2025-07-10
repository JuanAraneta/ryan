import { graphql } from "gql.tada";

export const AssetFragment = graphql(`
  fragment HeaderFragment on Asset {
    url
    contentType
  }
`);
