import { graphql } from "gql.tada";

export const HeaderFragment = graphql(`
  fragment HeaderFragment on Header {
    title
  }
`);
