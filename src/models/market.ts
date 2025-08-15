import { footer } from "./footer";
import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const market = {
  sys: { id: "market" },
  name: "Market",
  description:
    "Represents a geographical market or country (e.g., United States, Brazil, Canada) used to associate region-specific content like pages, social links, site settings, and SEO metadata. Language variations are handled separately through Contentful localization.",
  fields: [
    createField("shortText", {
      id: "name",
      name: "Name",
      displayField: true,
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
      id: "footer",
      name: "Footer",
      linkContentType: [footer],
    }),
  ],
} as const satisfies ExpandedContentModel;
