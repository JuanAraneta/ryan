import { graphql } from "gql.tada";

export const AssetFragment = graphql(`
  fragment AssetFragment on Asset {
    url
    contentType
    description
  }
`);
