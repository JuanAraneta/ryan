import type { ContentModel } from "contentful-code-models";

export const componentLink: ContentModel = {
  sys: {
    id: "componentLink",
  },
  name: "Component / Link",
  description:
    "The standard type for representing links both internal to the application and to external URLs. Only fulfill either an external or internal source.",
  displayField: "label",
  fields: [
    {
      id: "label",
      name: "Label",
      type: "Symbol",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
    },
    {
      id: "internalSource",
      name: "Internal Source",
      type: "Link",
      localized: false,
      required: false,
      validations: [
        {
          linkContentType: ["page"],
        },
      ],
      disabled: false,
      omitted: false,
      linkType: "Entry",
    },
    {
      id: "externalSource",
      name: "External Source",
      type: "Symbol",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
    },
  ],
  editorInterface: {
    controls: [
      {
        fieldId: "label",
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "internalSource",
        widgetId: "entryLinkEditor",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "externalSource",
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
    ],
  },
};
