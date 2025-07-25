import type { ContentModel } from "contentful-code-models";

export const themeBackground: ContentModel = {
  sys: {
    id: "themeBackground",
  },
  name: "Theme / Background",
  description: "",
  displayField: "background",
  fields: [
    {
      id: "background",
      name: "Background",
      type: "Symbol",
      localized: false,
      required: true,
      validations: [
        {
          unique: true,
        },
        {
          in: [
            "brand-700",
            "brand-800",
            "brand-900",
            "gradient-brand-h-dark-to-light",
            "gradient-brand-h-light-to-dark",
            "gradient-brand-v-dark-to-light",
            "gradient-brand-v-light-to-dark",
            "gradient-brand-v-darker-to-dark",
            "gradient-brand-v-dark-to-darker",
            "gradient-gold-h-dark-to-light",
            "gradient-image-overlay",
            "gradient-container",
            "gradient-primary-gray",
            "gradient-secondary-gray-h-light-to-dark",
            "gradient-secondary-gray-h-dark-to-light",
            "gradient-secondary-gray-v-light-to-dark",
            "gradient-secondary-gray-v-dark-to-light",
            "gradient-tertiary-gray",
          ],
        },
      ],
      disabled: false,
      omitted: false,
    },
  ],
  editorInterface: {
    controls: [
      {
        fieldId: "background",
        widgetId: "dropdown",
        widgetNamespace: "builtin",
      },
    ],
  },
};
