import { categorySolutionsImageLink } from "./categorySolutionsImageLink";
import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const categorySolutionsImageLinkGrid = {
  sys: {
    id: "categorySolutionsImageLinkGrid",
  },
  name: "Category solutions / Image link grid",
  description: "",
  fields: [
    createField("contentfulLabel"),
    createField("entryReference", {
      id: "items",
      name: "Items",
      array: true,
      size: {
        min: 3,
        max: 3,
      },
      linkContentType: [categorySolutionsImageLink],
    }),
  ],
} as const satisfies ExpandedContentModel;
