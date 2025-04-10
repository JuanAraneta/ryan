import { FC } from "react";

export interface FooterProps {
  name: string;
}

export const Footer: FC<FooterProps> = (props: FooterProps) => {
  return <>{props.name}</>;
};
