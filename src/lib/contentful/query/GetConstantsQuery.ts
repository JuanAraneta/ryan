import { graphql } from "gql.tada";
import { ConstantsFragment } from "../fragments/ConstantsFragment";

export const GetConstantsQuery = graphql(
  `
    query GetConstantsQuery($locale: String, $preview: Boolean) {
      constantsCollection(limit: 1, preview: $preview, locale: $locale) {
        items {
          ...ConstantsFragment
        }
      }
    }
  `,
  [ConstantsFragment],
);
