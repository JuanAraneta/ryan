import { richTextFieldFactory } from "./factories/richTextFieldFactory";
import { contentfulLabelFieldFactory } from "./factories/contentfulLabelFieldFactory";
import { ExpandedContentModel } from "./types/ExpandedContentModel";

export const componentCategorySolutionsHeadline: ExpandedContentModel = {
  sys: {
    id: "componentCategorySolutionsHeadline",
  },
  name: "Category solutions / Headline",
  description: "",
  fields: [
    contentfulLabelFieldFactory(),
    richTextFieldFactory({ id: "richTextHeadline", name: "Headline" }),
  ],
};
