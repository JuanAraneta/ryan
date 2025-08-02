import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const pageService = {
  sys: { id: "pageService" },
  name: "Page / Service",
  description: "",
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
    createField("shortText", {
      id: "slug",
      name: "slug",
    }),
  ],
} as const satisfies ExpandedContentModel;
