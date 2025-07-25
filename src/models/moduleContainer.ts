import type { ContentModel } from "contentful-code-models";

export const moduleContainer: ContentModel = {
  sys: {
    id: "moduleContainer",
  },
  name: "Module / Container",
  description:
    "A container which owns groups of modules but supplies them with a theme & background color.",
  displayField: "contentfulLabel",
  fields: [
    {
      id: "contentfulLabel",
      name: "Contentful label",
      type: "Symbol",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
    },
    {
      id: "backgroundColorReference",
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
    {
      id: "backgroundColor",
      name: "Background color (deprecated)",
      type: "Symbol",
      localized: false,
      required: false,
      validations: [
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
      disabled: true,
      omitted: false,
    },
    {
      id: "modules",
      name: "Modules",
      type: "Array",
      localized: false,
      required: false,
      validations: [
        {
          size: {
            max: 5,
          },
        },
      ],
      disabled: false,
      omitted: false,
      items: {
        type: "Link",
        validations: [
          {
            linkContentType: [
              "moduleExpertsOverflow",
              "moduleCustomerStoriesCarousel",
              "moduleChapterGroup",
            ],
          },
        ],
        linkType: "Entry",
      },
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
        fieldId: "backgroundColorReference",
        widgetId: "entryLinkEditor",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "backgroundColor",
        settings: {
          helpText:
            'The background color for this group of modules. Generally, if the Theme value is "dark," then brand-800 is a safe choice, and if the Theme value is "light" then white is a safe choice.',
        },
        widgetId: "dropdown",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "modules",
        widgetId: "entryLinksEditor",
        widgetNamespace: "builtin",
      },
    ],
  },
};
