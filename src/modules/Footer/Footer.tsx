import { FooterFragment } from '@/lib/contentful/fragments/FooterFragment';
import { ResultOf } from 'gql.tada';
import { FC } from 'react';

export interface FooterProps {
  data: ResultOf<typeof FooterFragment>;
}

export const Footer: FC<FooterProps> = (props: FooterProps) => {
  return <footer>{props.data.title}</footer>;
};
