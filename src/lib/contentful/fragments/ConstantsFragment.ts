import { graphql } from "gql.tada";
import { MarketFragment } from "./MarketFragment";

export const ConstantsFragment = graphql(
  `
    fragment ConstantsFragment on Constants {
      defaultMarket {
        ...MarketFragment
      }
      previousButtonAriaLabel
      nextButtonAriaLabel
      scrollbarThumbLabel
      scrollbarTrackAriaLabel
      subscribeButtonLabel
      seeMore
      exploreButtonLabel
    }
  `,
  [MarketFragment],
);
