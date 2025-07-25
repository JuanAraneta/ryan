import type { ContentModel } from "contentful-code-models";

export const moduleChapterGroup: ContentModel = {
  sys: {
    id: "moduleChapterGroup",
  },
  name: "Module / Chapter group",
  description: "A group of chapter items.",
  displayField: "contentfulLabel",
  fields: [
    {
      id: "contentfulLabel",
      name: "Contentful label",
      type: "Symbol",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
    },
    {
      id: "chapters",
      name: "Chapters",
      type: "Array",
      localized: false,
      required: false,
      validations: [
        {
          size: {
            max: 10,
          },
        },
      ],
      disabled: false,
      omitted: false,
      items: {
        type: "Link",
        validations: [
          {
            linkContentType: ["componentCategorySolutionsChapter"],
          },
        ],
        linkType: "Entry",
      },
    },
  ],
  editorInterface: {
    controls: [
      {
        fieldId: "contentfulLabel",
        settings: {
          helpText: "A label for viewing on the Contentful UI.",
        },
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "chapters",
        widgetId: "entryLinksEditor",
        widgetNamespace: "builtin",
      },
    ],
  },
};
