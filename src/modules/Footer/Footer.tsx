import { FooterFragment } from "./FooterFragment";
import { ResultOf } from "gql.tada";
import { FC } from "react";
import { getInspector } from "@/utils/inspectorMode";

export interface FooterProps {
  data: ResultOf<typeof FooterFragment>;
}

export const Footer: FC<FooterProps> = (props: FooterProps) => {
  const inspector = getInspector(props.data);

  return <footer {...inspector("title")}>{props.data.title}</footer>;
};
