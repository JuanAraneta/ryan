import { graphql } from "gql.tada";

export const EntryCoreFragment = graphql(`
  fragment EntryCoreFragment on Entry @_unmask {
    __typename
    sys {
      id
    }
  }
`);
