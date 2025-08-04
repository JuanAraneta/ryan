import { graphql } from "gql.tada";
import { AssetFragment } from "./AssetFragment";

export const ComponentIconTextWrapFragment = graphql(
  `
    fragment ComponentIconTextWrapFragment on ComponentIconTextWrap {
      title
      body
      icon {
        ...AssetFragment
      }
    }
  `,
  [AssetFragment],
);
