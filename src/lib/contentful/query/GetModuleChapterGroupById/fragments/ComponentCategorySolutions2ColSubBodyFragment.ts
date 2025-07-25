import { RichTextFragments } from "@/lib/contentful/fragments/RichTextFragments.generated";
import { graphql } from "gql.tada";

export const ComponentCategorySolutions2ColSubBodyFragment = graphql(
  `
    fragment ComponentCategorySolutions2ColSubBodyFragment on ComponentCategorySolutions2ColSubBody {
      titleAndBodyReferencesCollection {
        items {
          richTextTitle {
            ...ComponentTitleAndBody_richTextTitleFragment
          }
          richTextBody {
            ...ComponentTitleAndBody_richTextBodyFragment
          }
        }
      }
    }
  `,
  [
    RichTextFragments.ComponentTitleAndBody_richTextBody,
    RichTextFragments.ComponentTitleAndBody_richTextTitle,
  ]
);
