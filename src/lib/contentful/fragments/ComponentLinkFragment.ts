import { graphql } from "gql.tada";
import { RichTextFragment } from "./RichTextFragment";

export const ComponentLinkFragment = graphql(`
  fragment ComponentLinkFragment on ComponentLink {
    label
    internalSource {
      slug
    }
    externalSource
  }
`);
