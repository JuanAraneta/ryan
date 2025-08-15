import { graphql } from "gql.tada";
import { EntryCoreFragment } from "../fragments/EntryCoreFragment";
import { MarketFragment } from "../fragments/MarketFragment";

export const GetPageById = graphql(
  `
    query GetPageById($locale: String, $preview: Boolean, $id: String!) {
      page(locale: $locale, preview: $preview, id: $id) {
        content {
          ...EntryCoreFragment
        }
        market {
          ...MarketFragment
        }
      }
    }
  `,
  [EntryCoreFragment, MarketFragment],
);
