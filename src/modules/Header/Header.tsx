import { FC } from "react";

export interface HeaderProps {
  name: string;
}

export const Header: FC<HeaderProps> = (props: HeaderProps) => {
  return <>{props.name}</>;
};
