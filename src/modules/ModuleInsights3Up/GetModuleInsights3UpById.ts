import { graphql } from "gql.tada";
import { ComponentLinkFragment } from "@/lib/contentful/fragments/ComponentLinkFragment";
import { ComponentInsightFragment } from "@/lib/contentful/fragments/ComponentInsightFragment";

export const GetModuleInsights3UpById = graphql(
  `
    query GetModuleInsights3UpById(
      $locale: String
      $preview: Boolean
      $id: String!
    ) {
      moduleInsights3Up(id: $id, preview: $preview, locale: $locale) {
        ...ModuleInsights3UpFragment
      }
    }

    fragment ModuleInsights3UpFragment on ModuleInsights3Up {
      sys {
        id
      }
      headline
      cta {
        ...ComponentLinkFragment
      }
      insightsCollection(limit: 3) {
        items {
          ...ComponentInsightFragment
        }
      }
    }
  `,
  [ComponentLinkFragment, ComponentInsightFragment],
);
