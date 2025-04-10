import { IComponentHeroBannerFields } from "@/models/contentful";
import { HeroProps } from "./Hero";

export const heroMorpher: HeroProps = (props: IComponentHeroBannerFields) => {
  return {
    name: props.headline,
  };
};
