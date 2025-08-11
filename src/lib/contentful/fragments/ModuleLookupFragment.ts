import { graphql } from "gql.tada";

export const ModuleLookupFragment = graphql(`
  fragment ModuleLookupFragment on Entry {
    __typename
    sys {
      id
    }
  }
`);
