import { RichTextFragments } from "@/lib/contentful/fragments/RichTextFragments.generated";
import { graphql } from "gql.tada";

export const ComponentCategorySolutionsHeadlineFragment = graphql(
  `
    fragment ComponentCategorySolutionsHeadlineFragment on ComponentCategorySolutionsHeadline {
      richTextHeadline {
        ...ComponentCategorySolutionsHeadline_richTextHeadlineFragment
      }
    }
  `,
  [RichTextFragments.ComponentCategorySolutionsHeadline_richTextHeadline]
);
