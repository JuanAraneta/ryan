import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const componentCategorySolutionsHeadline: ExpandedContentModel = {
  sys: {
    id: "componentCategorySolutionsHeadline",
  },
  name: "Category solutions / Headline",
  description: "",
  fields: [
    createField("contentfulLabel"),
    createField("richText", { id: "richTextHeadline", name: "Headline" }),
  ],
};
