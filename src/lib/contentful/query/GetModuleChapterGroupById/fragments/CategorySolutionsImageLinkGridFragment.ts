import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";
import { ComponentLinkFragment } from "@/lib/contentful/fragments/ComponentLinkFragment";
import { graphql } from "gql.tada";

export const CategorySolutionsImageLinkGridFragment = graphql(
  `
    fragment CategorySolutionsImageLinkGridFragment on CategorySolutionsImageLinkGrid {
      itemsCollection {
        items {
          image {
            ...AssetFragment
          }
          link {
            ...ComponentLinkFragment
          }
        }
      }
    }
  `,
  [ComponentLinkFragment, AssetFragment]
);
