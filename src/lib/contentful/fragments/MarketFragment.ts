import { graphql } from "gql.tada";

export const MarketFragment = graphql(`
  fragment MarketFragment on Market {
    slug
    sys {
      id
    }
  }
`);
