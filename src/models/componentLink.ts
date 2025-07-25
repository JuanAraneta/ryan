import { ExpandedContentModel } from "./types/ExpandedContentModel";

export const componentLink: ExpandedContentModel = {
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
      validations: [],
      editorInterface: {
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
    },
    {
      id: "internalSource",
      name: "Internal Source",
      type: "Link",
      validations: [
        {
          linkContentType: ["page"],
        },
      ],
      linkType: "Entry",
      editorInterface: {
        widgetId: "entryLinkEditor",
        widgetNamespace: "builtin",
      },
    },
    {
      id: "externalSource",
      name: "External Source",
      type: "Symbol",
      validations: [],
      editorInterface: {
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
    },
  ],
};
