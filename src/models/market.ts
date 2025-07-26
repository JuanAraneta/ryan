import { socialMediaLink } from "./socialMediaLink";
import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const market = {
  sys: {
    id: "market",
  },
  name: "Market",
  description:
    "Represents a geographical market or country (e.g., United States, Brazil, Canada) used to associate region-specific content like pages, social links, site settings, and SEO metadata. Language variations are handled separately through Contentful localization.",
  displayField: "name",
  fields: [
    createField("shortText", {
      id: "name",
      name: "Name",
      required: true,
      validations: [{ unique: true }],
      editorInterface: {
        settings: {
          helpText:
            'A human-friendly name of the market, like "United States" or "Argentina". Used for internal clarity.',
        },
      },
    }),
    createField("shortText", {
      id: "slug",
      name: "Slug",
      required: true,
      validations: [
        { unique: true },
        {
          regexp: {
            pattern: "^[a-z0-9]+(-[a-z0-9]+)*$",
            //@ts-expect-error Package type error. This is valid.
            flags: null,
          },
        },
      ],
    }),
    createField("entryReference", {
      array: true,
      id: "socialMediaLinks",
      name: "Social Media Links",
      size: { max: 10 },
      linkContentType: [socialMediaLink],
    }),
  ],
} as const satisfies ExpandedContentModel;
