import { graphql } from "gql.tada";
import { ModulePlatformFragment } from "../fragments/ModulePlatformFragment";

export const GetModulePlatformById = graphql(
  `
    query GetModulePlatformById(
      $locale: String
      $preview: Boolean
      $id: String!
    ) {
      modulePlatform(id: $id, preview: $preview, locale: $locale) {
        ...ModulePlatformFragment
      }
    }
  `,
  [ModulePlatformFragment],
);
