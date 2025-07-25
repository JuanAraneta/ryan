import type { ContentModel } from "contentful-code-models";
import { richTextFieldFactory } from "./factories/richTextFieldFactory";

export const componentCardDeviceMock: ContentModel = {
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
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
    },
    {
      id: "backgroundColor",
      name: "Background color",
      type: "Link",
      localized: false,
      required: false,
      validations: [
        {
          linkContentType: ["themeBackground"],
        },
      ],
      disabled: false,
      omitted: false,
      linkType: "Entry",
    },
    richTextFieldFactory({ id: "richTextBody", name: "Body" }),
    {
      id: "callToAction",
      name: "Call to action",
      type: "Link",
      localized: false,
      required: false,
      validations: [
        {
          linkContentType: ["componentLink"],
        },
      ],
      disabled: false,
      omitted: false,
      linkType: "Entry",
    },
    {
      id: "deviceMock",
      name: "Device mock",
      type: "Link",
      localized: false,
      required: false,
      validations: [
        {
          linkMimetypeGroup: ["image"],
        },
      ],
      disabled: false,
      omitted: false,
      linkType: "Asset",
    },
  ],
  editorInterface: {
    controls: [
      {
        fieldId: "title",
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "backgroundColor",
        widgetId: "entryLinkEditor",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "body",
        widgetId: "entryLinkEditor",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "callToAction",
        widgetId: "entryLinkEditor",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "deviceMock",
        widgetId: "assetLinkEditor",
        widgetNamespace: "builtin",
      },
    ],
  },
};
