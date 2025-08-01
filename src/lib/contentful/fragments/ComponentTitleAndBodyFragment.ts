import { graphql } from "gql.tada";
import { RichTextFragments } from "./RichTextFragments.generated";

export const ComponentTitleAndBodyFragment = graphql(
  `
    fragment ComponentTitleAndBodyFragment on ComponentTitleAndBody {
      richTextTitle {
        ...ComponentTitleAndBody_richTextTitleFragment
      }
      richTextBody {
        ...ComponentTitleAndBody_richTextBodyFragment
      }
    }
  `,
  [
    RichTextFragments.ComponentTitleAndBody_richTextTitle,
    RichTextFragments.ComponentTitleAndBody_richTextBody,
  ],
);
