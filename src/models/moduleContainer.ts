import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const moduleContainer: ExpandedContentModel = {
  sys: {
    id: "moduleContainer",
  },
  name: "Module / Container",
  description:
    "A container which owns groups of modules but supplies them with a theme & background color.",
  fields: [
    createField("contentfulLabel"),
    {
      id: "backgroundColorReference",
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
    createField("shortText", {
      id: "backgroundColor",
      name: "Background color (deprecated)",
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
      editorInterface: {
        settings: {
          helpText:
            'The background color for this group of modules. Generally, if the Theme value is "dark," then brand-800 is a safe choice, and if the Theme value is "light" then white is a safe choice.',
        },
      },
    }),

    {
      id: "modules",
      name: "Modules",
      type: "Array",
      validations: [{ size: { max: 5 } }],
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
      editorInterface: {
        widgetId: "entryLinksEditor",
        widgetNamespace: "builtin",
      },
    },
  ],
};
