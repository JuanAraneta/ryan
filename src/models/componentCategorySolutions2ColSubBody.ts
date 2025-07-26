import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const componentCategorySolutions2ColSubBody: ExpandedContentModel = {
  sys: {
    id: "componentCategorySolutions2ColSubBody",
  },
  name: "Category Solutions / 2 col sub + body",
  description: "",
  fields: [
    createField("contentfulLabel"),
    {
      id: "titleAndBodyReferences",
      name: "Title and body references",
      type: "Array",
      validations: [
        {
          size: {
            min: 2,
            max: 2,
          },
        },
      ],
      items: {
        type: "Link",
        validations: [
          {
            linkContentType: ["componentTitleAndBody"],
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
