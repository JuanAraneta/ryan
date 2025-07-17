import { graphql } from "gql.tada";

export const ThemeBackgroundFragment = graphql(`
  fragment ThemeBackgroundFragment on ThemeBackground {
    background
  }
`);
