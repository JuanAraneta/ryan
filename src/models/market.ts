import type { ContentModel } from "contentful-code-models";

export const market: ContentModel = {
  sys: {
    id: "market",
  },
  name: "Market",
  description:
    "Represents a geographical market or country (e.g., United States, Brazil, Canada) used to associate region-specific content like pages, social links, site settings, and SEO metadata. Language variations are handled separately through Contentful localization.",
  displayField: "name",
  fields: [
    {
      id: "name",
      name: "Name",
      type: "Symbol",
      localized: false,
      required: true,
      validations: [
        {
          unique: true,
        },
      ],
      disabled: false,
      omitted: false,
    },
    {
      id: "slug",
      name: "Slug",
      type: "Symbol",
      localized: false,
      required: true,
      validations: [
        {
          unique: true,
        },
        {
          regexp: {
            pattern: "^[a-z0-9]+(-[a-z0-9]+)*$",
            //@ts-expect-error
            flags: null,
          },
        },
      ],
      disabled: false,
      omitted: false,
    },
    {
      id: "socialMediaLinks",
      name: "Social Media Links",
      type: "Array",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
      items: {
        type: "Link",
        validations: [
          {
            linkContentType: ["socialMediaLink"],
          },
        ],
        linkType: "Entry",
      },
    },
  ],
  editorInterface: {
    controls: [
      {
        fieldId: "name",
        settings: {
          helpText:
            'A human-friendly name of the market, like "United States" or "Argentina". Used for internal clarity.',
        },
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "slug",
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "socialMediaLinks",
        widgetId: "entryCardsEditor",
        widgetNamespace: "builtin",
      },
    ],
  },
};
