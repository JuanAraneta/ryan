import { IComponentQuoteFields } from "@/models/contentful";

export const notFoundMorpher = (props: IComponentQuoteFields) => {
  return {
    name: props.title,
  };
};
