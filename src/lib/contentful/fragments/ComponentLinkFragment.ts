import { graphql } from "gql.tada";

export const ComponentLinkFragment = graphql(`
  fragment ComponentLinkFragment on ComponentLink {
    label
    internalSource {
      slug
    }
    externalSource
  }
`);
