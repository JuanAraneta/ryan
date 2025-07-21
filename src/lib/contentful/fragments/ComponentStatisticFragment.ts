import { graphql } from 'gql.tada';
import { RichTextFragment } from './RichTextFragment';

export const ComponentStatisticFragment = graphql(
  `
    fragment ComponentStatisticFragment on ComponentStatistic {
      label {
        ...RichTextFragment
      }
      value
      prefix
      suffix
    }
  `,
  [RichTextFragment]
);
