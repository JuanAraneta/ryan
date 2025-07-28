import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const urlRedirect = {
  sys: {
    id: "urlRedirect",
  },
  name: "URL Redirect",
  description:
    "Defines a redirect rule to guide users and search engines from one URL to another. Useful for maintaining SEO when content is moved, renamed, or removed. Supports permanent (301) and temporary (302) redirects, as well as region- and language-specific use cases.",
  fields: [
    createField("shortText", {
      id: "slug",
      name: "Slug",
      required: true,
      displayField: true,
      validations: [
        {
          regexp: { pattern: "^([a-z0-9\\-]+\\/)*[a-z0-9\\-]+$", flags: "s" },
          message:
            "Invalid slug format. Only lowercase letters, numbers, and hyphens are allowed. Use forward slashes (/) to separate nested paths. Example: about-us or us/es-ar/contact",
        },
      ],
    }),
    createField("shortText", {
      id: "destination",
      name: "Destination",
      required: true,
      validations: [
        {
          regexp: {
            pattern: "^([a-z0-9\\-]+\\/)*[a-z0-9\\-]+$",
            flags: "s",
          },
          message:
            "Invalid slug format. Only lowercase letters, numbers, and hyphens are allowed. Use forward slashes (/) to separate nested paths. Example: about-us or us/es-ar/contact",
        },
      ],
    }),
    createField("shortText", {
      id: "redirectType",
      name: "Redirect type",
      required: true,
      validations: [{ in: ["temporary", "permanent"] }],
      editorInterface: {
        settings: {
          helpText:
            "Please select either Permanent (301) or Temporary (302) to define how this redirect should behave.",
        },
        widgetId: "dropdown",
      },
    }),
    createField("boolean", {
      id: "active",
      name: "Active",
      required: true,
      defaultValue: {
        "en-US": false,
      },
      editorInterface: {
        settings: {
          helpText:
            "Please specify whether this redirect is currently active. Only active redirects will be applied on the site.",
        },
      },
    }),
    createField("boolean", {
      id: "startDate",
      name: "Start date",
      editorInterface: {
        settings: {
          helpText:
            'The date and time when this redirect should begin working. Leave empty to activate immediately (if "Active" is enabled).',
        },
      },
    }),
    createField("boolean", {
      id: "endDate",
      name: "End date",
      editorInterface: {
        settings: {
          helpText:
            "The date and time when this redirect should stop working. Leave empty for the redirect to remain active indefinitely.",
        },
      },
    }),
  ],
} as const satisfies ExpandedContentModel;
