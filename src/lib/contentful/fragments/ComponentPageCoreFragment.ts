import { graphql } from "gql.tada";
import { EntryCoreFragment } from "./EntryCoreFragment";
import { MarketFragment } from "./MarketFragment";

export const ComponentPageCoreFragment = graphql(
  `
    fragment ComponentPageCoreFragment on ComponentPageCore @_unmask {
      ...EntryCoreFragment
      market {
        ...MarketFragment
      }
      path
    }
  `,
  [MarketFragment, EntryCoreFragment],
);
