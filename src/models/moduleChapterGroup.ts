import { contentfulLabelFieldFactory } from "./factories/contentfulLabelFieldFactory";
import { ExpandedContentModel } from "./types/ExpandedContentModel";

export const moduleChapterGroup: ExpandedContentModel = {
  sys: {
    id: "moduleChapterGroup",
  },
  name: "Module / Chapter group",
  description: "A group of chapter items.",
  fields: [
    contentfulLabelFieldFactory(),
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
};
