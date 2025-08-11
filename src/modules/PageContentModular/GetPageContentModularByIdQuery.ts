import { graphql } from "gql.tada";
import { ModuleLookupFragment } from "@/lib/contentful/fragments/ModuleLookupFragment";

export const GetPageContentModularByIdQuery = graphql(
  `
    query GetPageContentModularByIdQuery(
      $locale: String
      $preview: Boolean
      $id: String!
    ) {
      pageContentModular(id: $id, preview: $preview, locale: $locale) {
        ...PageContentModularFragment
      }
    }

    fragment PageContentModularFragment on PageContentModular {
      hero {
        ...ModuleLookupFragment
      }
      moduleContainersCollection {
        items {
          sys {
            id
          }
          moduleBackground
          modulesCollection {
            items {
              ...ModuleLookupFragment
            }
          }
        }
      }
    }
  `,
  [ModuleLookupFragment],
);
