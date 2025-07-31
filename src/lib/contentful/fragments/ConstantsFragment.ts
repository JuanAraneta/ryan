import { graphql } from "gql.tada";

export const ConstantsFragment = graphql(`
  fragment ConstantsFragment on Constants {
    previousButtonAriaLabel
    nextButtonAriaLabel
    scrollbarThumbLabel
    scrollbarTrackAriaLabel
    subscribeButtonLabel
  }
`);
