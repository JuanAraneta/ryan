import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";
import { componentLink } from "./componentLink";

export const categorySolutionsImageLink = {
  sys: {
    id: "categorySolutionsImageLink",
  },
  name: "Category solutions / Image link grid / Item",
  description: "",
  fields: [
    createField("contentfulLabel"),
    createField("assetReference", {
      id: "image",
      name: "Image",
      imagesOnly: true,
    }),
    createField("entryReference", {
      id: "link",
      name: "Link",
      linkContentType: [componentLink],
    }),
  ],
} as const satisfies ExpandedContentModel;

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
