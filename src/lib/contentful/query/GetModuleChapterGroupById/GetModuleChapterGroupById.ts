import { graphql } from "gql.tada";
import { ComponentCardDeviceMockFragment } from "./fragments/CardDeviceMockFragment";

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
          title
          contentsCollection {
            items {
              __typename
              ...ComponentCardDeviceMockFragment
            }
          }
        }
      }
    }
  `,
  [ComponentCardDeviceMockFragment]
);
