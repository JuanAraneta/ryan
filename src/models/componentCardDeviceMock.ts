import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const componentCardDeviceMock = {
  sys: {
    id: "componentCardDeviceMock",
  },
  name: "Category solutions / Card & device mock",
  description: "Often the card that is the headline container for a chapter.",
  fields: [
    createField("shortText", {
      id: "title",
      name: "Title",
      displayField: true,
    }),
    {
      id: "backgroundColor",
      name: "Background color",
      type: "Link",
      validations: [
        {
          linkContentType: ["themeBackground"],
        },
      ],
      linkType: "Entry",
      editorInterface: {
        widgetId: "entryLinkEditor",
        widgetNamespace: "builtin",
      },
    },
    createField("richText", { id: "richTextBody", name: "Body" }),
    {
      id: "callToAction",
      name: "Call to action",
      type: "Link",
      validations: [
        {
          linkContentType: ["componentLink"],
        },
      ],
      linkType: "Entry",
      editorInterface: {
        widgetId: "entryLinkEditor",
        widgetNamespace: "builtin",
      },
    },
    {
      id: "deviceMock",
      name: "Device mock",
      type: "Link",
      validations: [
        {
          linkMimetypeGroup: ["image"],
        },
      ],
      linkType: "Asset",
      editorInterface: {
        widgetId: "assetLinkEditor",
        widgetNamespace: "builtin",
      },
    },
  ],
} as const satisfies ExpandedContentModel;
