import { graphql } from "gql.tada";

export const GetAllPagesQuery = graphql(`
  query GetAllPagesQuery {
    pageCollection(limit: 5000) {
      items {
        slug
        sys {
          publishedAt
          locale
        }
        market {
          slug
        }
      }
    }
  }
`);
