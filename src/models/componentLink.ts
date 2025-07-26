import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const componentLink = {
  sys: {
    id: "componentLink",
  },
  name: "Component / Link",
  description:
    "The standard type for representing links both internal to the application and to external URLs. Only fulfill either an external or internal source.",
  displayField: "label",
  fields: [
    createField("shortText", {
      id: "label",
      name: "Label",
    }),
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
    createField("shortText", { id: "externalSource", name: "External Source" }),
  ],
} as const satisfies ExpandedContentModel;
