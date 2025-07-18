import { RichTextFragment } from "@/lib/contentful/fragments/RichTextFragment";
import { graphql } from "gql.tada";

export const ComponentCategorySolutionsHeadlineFragment = graphql(
  `
    fragment ComponentCategorySolutionsHeadlineFragment on ComponentCategorySolutionsHeadline {
      headline {
        ...RichTextFragment
      }
    }
  `,
  [RichTextFragment]
);
