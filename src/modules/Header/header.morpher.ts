import { IHeaderFields } from "@/models/contentful";
import { HeaderProps } from "./Header";

export const headerMorpher: HeaderProps = (props: IHeaderFields) => {
  return {
    name: props.title,
  };
};
