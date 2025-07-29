import { graphql } from "gql.tada";
import { ModuleInsightsBentoFragment } from "../fragments/ModuleInsightsBentoFragment";

export const GetModuleInsightsBentoById = graphql(
  `
    query GetModuleInsightsBentoById(
      $locale: String
      $preview: Boolean
      $id: String!
    ) {
      moduleInsightsBento(id: $id, preview: $preview, locale: $locale) {
        ...ModuleInsightsBentoFragment
      }
    }
  `,
  [ModuleInsightsBentoFragment],
);
