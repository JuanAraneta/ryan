import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const componentServiceDetails = {
  sys: { id: "componentServiceDetails" },
  name: "Component / Service details",
  description: "",
  fields: [
    createField("shortText", {
      id: "title",
      name: "Title",
      displayField: true,
    }),
    createField("shortText", {
      id: "slug",
      name: "Slug",
    }),
    createField("richText", {
      id: "shortDescription",
      name: "Short description",
    }),
    createField("assetReference", {
      id: "image",
      name: "Image",
      imagesOnly: true,
    }),
    createField("shortText", {
      id: "practiceArea",
      name: "Practice Area",
    }),
  ],
} as const satisfies ExpandedContentModel;
