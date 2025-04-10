import { IComponentDuplexFields } from "@/models/contentful";
import { HeaderProps } from "./Header";

export const headerMorpher: HeaderProps = (props: IComponentDuplexFields) => {
  return {
    name: props.headline,
  };
};
