import type { ContentModel } from "contentful-code-models";

export const urlRedirect: ContentModel = {
  sys: {
    id: "urlRedirect",
  },
  name: "URL Redirect",
  description:
    "Defines a redirect rule to guide users and search engines from one URL to another. Useful for maintaining SEO when content is moved, renamed, or removed. Supports permanent (301) and temporary (302) redirects, as well as region- and language-specific use cases.",
  displayField: "slug",
  fields: [
    {
      id: "slug",
      name: "Slug",
      type: "Symbol",
      localized: false,
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
      disabled: false,
      omitted: false,
    },
    {
      id: "destination",
      name: "Destination",
      type: "Symbol",
      localized: false,
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
      disabled: false,
      omitted: false,
    },
    {
      id: "redirectType",
      name: "Redirect type\t",
      type: "Symbol",
      localized: false,
      required: true,
      validations: [
        {
          in: ["temporary", "permanent"],
        },
      ],
      disabled: false,
      omitted: false,
    },
    {
      id: "active",
      name: "Active",
      type: "Boolean",
      localized: false,
      required: true,
      validations: [],
      defaultValue: {
        "en-US": false,
      },
      disabled: false,
      omitted: false,
    },
    {
      id: "startDate",
      name: "Start date",
      type: "Date",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
    },
    {
      id: "endDate",
      name: "End date",
      type: "Date",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
    },
  ],
  editorInterface: {
    controls: [
      {
        fieldId: "slug",
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "destination",
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "redirectType",
        settings: {
          helpText:
            "Please select either Permanent (301) or Temporary (302) to define how this redirect should behave.",
        },
        widgetId: "dropdown",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "active",
        settings: {
          helpText:
            "Please specify whether this redirect is currently active. Only active redirects will be applied on the site.",
          trueLabel: "Yes",
          falseLabel: "No",
        },
        widgetId: "boolean",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "startDate",
        settings: {
          ampm: "24",
          format: "timeZ",
          helpText:
            'The date and time when this redirect should begin working. Leave empty to activate immediately (if "Active" is enabled).',
        },
        widgetId: "datePicker",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "endDate",
        settings: {
          ampm: "24",
          format: "timeZ",
          helpText:
            "The date and time when this redirect should stop working. Leave empty for the redirect to remain active indefinitely.",
        },
        widgetId: "datePicker",
        widgetNamespace: "builtin",
      },
    ],
  },
};
