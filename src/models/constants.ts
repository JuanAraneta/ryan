import type { ContentModel } from "contentful-code-models";

export const constants: ContentModel = {
  sys: {
    id: "constants",
  },
  name: "Constants",
  description:
    "All constant strings that get used in multiple places throughout the application.",
  displayField: "contentfulLabel",
  fields: [
    {
      id: "contentfulLabel",
      name: "Contentful label",
      type: "Symbol",
      localized: false,
      required: false,
      validations: [],
      defaultValue: {
        "en-US": "Constants",
      },
      disabled: false,
      omitted: false,
    },
    {
      id: "previousButtonAriaLabel",
      name: "Previous button ARIA label",
      type: "Symbol",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
    },
    {
      id: "nextButtonAriaLabel",
      name: "Next button ARIA label",
      type: "Symbol",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
    },
    {
      id: "scrollbarThumbLabel",
      name: "Scrollbar thumb ARIA label",
      type: "Symbol",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
    },
    {
      id: "scrollbarTrackAriaLabel",
      name: "Scrollbar track ARIA label",
      type: "Symbol",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
    },
    {
      id: "singletonLock",
      name: "Singleton lock",
      type: "Symbol",
      localized: false,
      required: true,
      validations: [
        {
          unique: true,
        },
        {
          in: ["singleton-lock"],
          message:
            "Do not modify this field. It is a technical stability requirement.",
        },
      ],
      disabled: false,
      omitted: false,
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
        fieldId: "previousButtonAriaLabel",
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "nextButtonAriaLabel",
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "scrollbarThumbLabel",
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "scrollbarTrackAriaLabel",
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "singletonLock",
        settings: {
          helpText:
            "Do not modify this field. It is only here to prevent the creation of new instances of this type as it should remain a singleton.",
        },
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
    ],
  },
};
