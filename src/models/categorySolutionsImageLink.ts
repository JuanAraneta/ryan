import { componentLink } from "./componentLink";
import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

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
