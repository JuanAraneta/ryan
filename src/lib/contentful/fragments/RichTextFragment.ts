import { graphql } from "gql.tada";
import { ComponentLinkFragment } from "./ComponentLinkFragment";

export const RichTextFragment = graphql(
  /* GraphQL */ `
    fragment RichTextFragment on ContentTypeRichText {
      richText {
        json
        links {
          entries {
            inline {
              sys {
                id
              }
              __typename
              ... on ComponentLink {
                ...ComponentLinkFragment
              }
            }
            block {
              sys {
                id
              }
              __typename
            }
            hyperlink {
              sys {
                id
              }
              __typename
              ... on Page {
                slug
              }
            }
          }
          assets {
            __typename
            block {
              sys {
                id
              }
              url
              contentType
            }
          }
        }
      }
    }
  `,
  [ComponentLinkFragment]
);
