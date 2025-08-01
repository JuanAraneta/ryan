import { graphql } from "gql.tada";

export const ComponentIconTextWrapFragment = graphql(`
  fragment ComponentIconTextWrapFragment on ComponentIconTextWrap {
    title
    body
    icon
  }
`);
