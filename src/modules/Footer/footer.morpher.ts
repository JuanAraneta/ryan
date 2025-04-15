import { IFooterFields } from "@/models/contentful";
import { FooterProps } from "./Footer";

export const footerMorpher: FooterProps = (props: IFooterFields) => {
  return {
    name: props.title,
  };
};
