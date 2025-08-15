import { EntryCoreFragment } from "@/lib/contentful/fragments/EntryCoreFragment";
import { graphql } from "gql.tada";

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
        ...EntryCoreFragment
      }
      moduleContainersCollection {
        items {
          sys {
            id
          }
          moduleBackground
          modulesCollection {
            items {
              ...EntryCoreFragment
            }
          }
        }
      }
    }
  `,
  [EntryCoreFragment],
);
