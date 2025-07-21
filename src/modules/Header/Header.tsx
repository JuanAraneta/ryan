import { HeaderFragment } from "@/lib/contentful/fragments/HeaderFragment";
import { ResultOf } from "gql.tada";
import { FC } from "react";

export type HeaderProps = {
  data: ResultOf<typeof HeaderFragment>;
};

export const Header: FC<HeaderProps> = (props) => {
  return <header>{props.data.title}</header>;
};
