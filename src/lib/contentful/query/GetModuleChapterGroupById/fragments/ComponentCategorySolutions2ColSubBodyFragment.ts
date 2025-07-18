import { RichTextFragment } from "@/lib/contentful/fragments/RichTextFragment";
import { graphql } from "gql.tada";

export const ComponentCategorySolutions2ColSubBodyFragment = graphql(
  `
    fragment ComponentCategorySolutions2ColSubBodyFragment on ComponentCategorySolutions2ColSubBody {
      titleAndBodyReferencesCollection {
        items {
          title {
            ...RichTextFragment
          }
          body {
            ...RichTextFragment
          }
        }
      }
    }
  `,
  [RichTextFragment]
);
