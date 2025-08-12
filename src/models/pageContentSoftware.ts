import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const pageContentSoftware = {
  sys: { id: "pageSoftware" },
  name: "Page content / Software",
  description:
    "Page-content model which represents all details for a particular software.",
  fields: [
    createField("shortText", {
      id: "title",
      name: "Title",
      displayField: true,
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
