import type { ContentModel } from "contentful-code-models";

export const script: ContentModel = {
  sys: {
    id: "script",
  },
  name: "Script",
  description:
    "Manages custom scripts (e.g., analytics, cookie consent, marketing tags) that should be injected into the website. Supports external sources and inline code. Use with caution to ensure performance and security best practices.",
  displayField: "id",
  fields: [
    {
      id: "id",
      name: "Id",
      type: "Symbol",
      localized: false,
      required: true,
      validations: [
        {
          unique: true,
        },
      ],
      defaultValue: {
        "en-US": "A unique identifier for this script",
      },
      disabled: false,
      omitted: false,
    },
    {
      id: "source",
      name: "Source",
      type: "Symbol",
      localized: false,
      required: true,
      validations: [
        {
          unique: true,
        },
        {
          regexp: {
            pattern:
              "^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-/]))?$",
            //@ts-expect-error
            flags: null,
          },
        },
      ],
      disabled: false,
      omitted: false,
    },
    {
      id: "strategy",
      name: "Strategy",
      type: "Symbol",
      localized: false,
      required: true,
      validations: [
        {
          in: ["beforeInteractive", "afterInteractive", "lazyOnload", "worker"],
        },
      ],
      defaultValue: {
        "en-US": "beforeInteractive",
      },
      disabled: false,
      omitted: false,
    },
    {
      id: "inlineScript",
      name: "Inline script",
      type: "Text",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
    },
    {
      id: "executionStrategy",
      name: "Execution strategy",
      type: "Symbol",
      localized: false,
      required: false,
      validations: [
        {
          in: ["async", "defer"],
        },
      ],
      disabled: false,
      omitted: false,
    },
    {
      id: "crossOrigin",
      name: "Cross origin",
      type: "Symbol",
      localized: false,
      required: false,
      validations: [
        {
          in: ["anonymous", "use-credentials"],
        },
      ],
      disabled: false,
      omitted: false,
    },
  ],
  editorInterface: {
    controls: [
      {
        fieldId: "id",
        settings: {
          helpText: "A unique identifier for this script",
        },
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "source",
        widgetId: "urlEditor",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "strategy",
        settings: {
          helpText: "Determines when and how the script should load",
        },
        widgetId: "dropdown",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "inlineScript",
        widgetId: "markdown",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "executionStrategy",
        settings: {
          helpText: "Controls how and when the script runs",
        },
        widgetId: "dropdown",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "crossOrigin",
        settings: {
          helpText:
            "Controls how the browser handles cross-origin requests for this script",
        },
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
    ],
  },
};
