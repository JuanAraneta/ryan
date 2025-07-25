import { richTextFieldFactory } from "./factories/richTextFieldFactory";
import { ExpandedContentModel } from "./types/ExpandedContentModel";

export const componentCardDeviceMock: ExpandedContentModel = {
  sys: {
    id: "componentCardDeviceMock",
  },
  name: "Category solutions / Card & device mock",
  description: "Often the card that is the headline container for a chapter.",
  displayField: "title",
  fields: [
    {
      id: "title",
      name: "Title",
      type: "Symbol",
      validations: [],
      editorInterface: {
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
    },
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
    richTextFieldFactory({ id: "richTextBody", name: "Body" }),
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
};
