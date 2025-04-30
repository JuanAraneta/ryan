import { IHeaderFields } from "@/models/contentful";
import { HeaderProps } from "./Header";

export const headerMorpher: (props: IHeaderFields) => HeaderProps = (
  props: IHeaderFields
) => {
  return {
    name: props.title,
  };
};
