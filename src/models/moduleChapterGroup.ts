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
    {
      id: "chapters",
      name: "Chapters",
      type: "Array",
      validations: [
        {
          size: {
            max: 10,
          },
        },
      ],
      items: {
        type: "Link",
        validations: [
          {
            linkContentType: ["componentCategorySolutionsChapter"],
          },
        ],
        linkType: "Entry",
      },
      editorInterface: {
        widgetId: "entryLinksEditor",
        widgetNamespace: "builtin",
      },
    },
  ],
} as const satisfies ExpandedContentModel;
