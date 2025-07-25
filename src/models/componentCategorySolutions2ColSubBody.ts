import type { ContentModel } from "contentful-code-models";

export const componentCategorySolutions2ColSubBody: ContentModel = {
  sys: {
    id: "componentCategorySolutions2ColSubBody",
  },
  name: "Category Solutions / 2 col sub + body",
  description: "",
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
      id: "titleAndBodyReferences",
      name: "Title and body references",
      type: "Array",
      localized: false,
      required: false,
      validations: [
        {
          size: {
            min: 2,
            max: 2,
          },
        },
      ],
      disabled: false,
      omitted: false,
      items: {
        type: "Link",
        validations: [
          {
            linkContentType: ["componentTitleAndBody"],
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
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "titleAndBodyReferences",
        widgetId: "entryLinksEditor",
        widgetNamespace: "builtin",
      },
    ],
  },
};
