import { graphql } from "gql.tada";

export const GetPageByIdQuery = graphql(`
  query GetPageByIdQuery($locale: String, $preview: Boolean, $id: String!) {
    page(locale: $locale, preview: $preview, id: $id) {
      market {
        slug
      }
      pageContent {
        __typename
        ... on Entry {
          sys {
            id
          }
        }
      }
    }
  }
`);
