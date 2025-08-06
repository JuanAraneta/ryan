import { graphql } from "gql.tada";
import { ComponentCardDeviceMockFragment } from "./fragments/CardDeviceMockFragment";
import { ComponentCategorySolutionsHeadlineFragment } from "./fragments/ComponentCategorySolutionsHeadlineFragment";
import { ComponentCategorySolutions2ColSubBodyFragment } from "./fragments/ComponentCategorySolutions2ColSubBodyFragment";
import { CategorySolutionsImageLinkGridFragment } from "./fragments/CategorySolutionsImageLinkGridFragment";

export const GetModuleChapterGroupById = graphql(
  `
    query GetModuleChapterGroupById(
      $locale: String
      $preview: Boolean
      $id: String!
    ) {
      moduleChapterGroup(id: $id, preview: $preview, locale: $locale) {
        ...ModuleChapterGroupByFragment
      }
    }

    fragment ModuleChapterGroupByFragment on ModuleChapterGroup {
      chaptersCollection {
        items {
          sys {
            id
          }
          title
          contentsCollection {
            items {
              __typename
              ... on ComponentCardDeviceMock {
                ...ComponentCardDeviceMockFragment
              }
              ... on ComponentCategorySolutionsHeadline {
                ...ComponentCategorySolutionsHeadlineFragment
              }
              ... on ComponentCategorySolutions2ColSubBody {
                ...ComponentCategorySolutions2ColSubBodyFragment
              }
              ... on CategorySolutionsImageLinkGrid {
                ...CategorySolutionsImageLinkGridFragment
              }
            }
          }
        }
      }
    }
  `,
  [
    ComponentCardDeviceMockFragment,
    ComponentCategorySolutionsHeadlineFragment,
    ComponentCategorySolutions2ColSubBodyFragment,
    CategorySolutionsImageLinkGridFragment,
  ],
);
