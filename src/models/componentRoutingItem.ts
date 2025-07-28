import type { ContentModel } from "contentful-code-models";

export const componentRoutingItem: ContentModel = {
  sys: {
    id: "componentRoutingItem",
  },
  name: "Component / Routing Item",
  description:
    "A generic routing item component that can be used in various navigation contexts with configurable content.",
  displayField: "heading",
  fields: [
    {
      id: "heading",
      name: "Heading",
      type: "Symbol",
      localized: false,
      required: true,
      validations: [
        {
          size: {
            min: 1,
            max: 100,
          },
        },
      ],
      disabled: false,
      omitted: false,
    },
    {
      id: "subheadingText",
      name: "Subheading Text",
      type: "Symbol",
      localized: false,
      required: false,
      validations: [
        {
          size: {
            max: 80,
          },
        },
      ],
      disabled: false,
      omitted: false,
    },
    {
      id: "eyebrowText",
      name: "Eyebrow Text",
      type: "Symbol",
      localized: false,
      required: true,
      validations: [
        {
          size: {
            min: 1,
            max: 60,
          },
        },
      ],
      disabled: false,
      omitted: false,
    },
    {
      id: "description",
      name: "Description",
      type: "Text",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
    },
    {
      id: "link",
      name: "Link",
      type: "Link",
      localized: false,
      required: true,
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
      id: "image",
      name: "Image",
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
        fieldId: "eyebrowText",
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "heading",
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "subheadingText",
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "description",
        widgetId: "multipleLine",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "image",
        settings: { helpText: "21:9 aspect ratio recommended for cards" },
        widgetId: "assetLinkEditor",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "link",
        widgetId: "entryLinkEditor",
        widgetNamespace: "builtin",
      },
    ],
  },
};
