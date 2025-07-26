import { componentCategorySolutionsChapter } from "./componentCategorySolutionsChapter";
import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const moduleChapterGroup = {
  sys: {
    id: "moduleChapterGroup",
  },
  name: "Module / Chapter group",
  description: "A group of chapter items.",
  fields: [
    createField("contentfulLabel"),
    createField("entryReference", {
      array: true,
      id: "chapters",
      name: "Chapters",
      size: { max: 10 },
      linkContentType: [componentCategorySolutionsChapter],
    }),
  ],
} as const satisfies ExpandedContentModel;
