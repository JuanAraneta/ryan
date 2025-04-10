import { IFooterMenuFields } from "@/models/contentful";
import { FooterProps } from "./Footer";

export const footerMorpher: FooterProps = (props: IFooterMenuFields) => {
  return {
    name: props.name,
  };
};
