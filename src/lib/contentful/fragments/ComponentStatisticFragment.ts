import { graphql } from "gql.tada";
import { RichTextFragments } from "./RichTextFragments.generated";

export const ComponentStatisticFragment = graphql(
  `
    fragment ComponentStatisticFragment on ComponentStatistic {
      sys {
        id
      }
      richTextLabel {
        ...ComponentStatistic_richTextLabelFragment
      }
      value
      prefix
      suffix
    }
  `,
  [RichTextFragments.ComponentStatistic_richTextLabel],
);
