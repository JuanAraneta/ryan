import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const pageContentService = {
  sys: { id: "pageService" },
  name: "Page content / Service",
  description:
    "Page-content model which represents all details for a particular service.",
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
  ],
} as const satisfies ExpandedContentModel;
