import { graphql } from "gql.tada";
import { AssetFragment } from "./AssetFragment";

export const ComponentLogoCarouselFragment = graphql(
  `
    fragment ComponentLogoCarouselFragment on ComponentLogoCarousel {
      logosCollection {
        items {
          ...AssetFragment
        }
      }
    }
  `,
  [AssetFragment],
);
