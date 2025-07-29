import { categorySolutionsImageLinkGrid } from "./categorySolutionsImageLinkGrid";
import { componentCardDeviceMock } from "./componentCardDeviceMock";
import { componentCategorySolutions2ColSubBody } from "./componentCategorySolutions2ColSubBody";
import { componentCategorySolutionsHeadline } from "./componentCategorySolutionsHeadline";
import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const componentCategorySolutionsChapter = {
  sys: {
    id: "componentCategorySolutionsChapter",
  },
  name: "Category solutions / Chapter",
  description: "",
  fields: [
    createField("shortText", {
      id: "title",
      name: "Title",
      displayField: true,
    }),
    createField("entryReference", {
      array: true,
      id: "contents",
      name: "Contents",
      size: { max: 5 },
      linkContentType: [
        componentCardDeviceMock,
        componentCategorySolutions2ColSubBody,
        componentCategorySolutionsHeadline,
        categorySolutionsImageLinkGrid,
      ],
    }),
  ],
} as const satisfies ExpandedContentModel;
