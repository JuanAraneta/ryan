import { ExpandedContentModel } from "./types/ExpandedContentModel";

export const market: ExpandedContentModel = {
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
      required: true,
      validations: [
        {
          unique: true,
        },
      ],
      editorInterface: {
        settings: {
          helpText:
            'A human-friendly name of the market, like "United States" or "Argentina". Used for internal clarity.',
        },
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
    },
    {
      id: "slug",
      name: "Slug",
      type: "Symbol",
      required: true,
      validations: [
        {
          unique: true,
        },
        {
          regexp: {
            pattern: "^[a-z0-9]+(-[a-z0-9]+)*$",
            //@ts-expect-error Package type error. This is valid.
            flags: null,
          },
        },
      ],
      editorInterface: {
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
    },
    {
      id: "socialMediaLinks",
      name: "Social Media Links",
      type: "Array",
      validations: [],
      items: {
        type: "Link",
        validations: [
          {
            linkContentType: ["socialMediaLink"],
          },
        ],
        linkType: "Entry",
      },
      editorInterface: {
        widgetId: "entryCardsEditor",
        widgetNamespace: "builtin",
      },
    },
  ],
  editorInterface: {
    controls: [],
  },
};
