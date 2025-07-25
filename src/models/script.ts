import { ExpandedContentModel } from "./types/ExpandedContentModel";

export const script: ExpandedContentModel = {
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
      required: true,
      validations: [
        {
          unique: true,
        },
      ],
      defaultValue: {
        "en-US": "A unique identifier for this script",
      },
      editorInterface: {
        settings: {
          helpText: "A unique identifier for this script",
        },
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
    },
    {
      id: "source",
      name: "Source",
      type: "Symbol",
      required: true,
      validations: [
        {
          unique: true,
        },
        {
          regexp: {
            pattern:
              "^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-/]))?$",
            //@ts-expect-error Package type error. This is valid.
            flags: null,
          },
        },
      ],
      editorInterface: {
        widgetId: "urlEditor",
        widgetNamespace: "builtin",
      },
    },
    {
      id: "strategy",
      name: "Strategy",
      type: "Symbol",
      required: true,
      validations: [
        {
          in: ["beforeInteractive", "afterInteractive", "lazyOnload", "worker"],
        },
      ],
      defaultValue: {
        "en-US": "beforeInteractive",
      },
      editorInterface: {
        settings: {
          helpText: "Determines when and how the script should load",
        },
        widgetId: "dropdown",
        widgetNamespace: "builtin",
      },
    },
    {
      id: "inlineScript",
      name: "Inline script",
      type: "Text",
      validations: [],
      editorInterface: {
        widgetId: "markdown",
        widgetNamespace: "builtin",
      },
    },
    {
      id: "executionStrategy",
      name: "Execution strategy",
      type: "Symbol",
      validations: [
        {
          in: ["async", "defer"],
        },
      ],
      editorInterface: {
        settings: {
          helpText: "Controls how and when the script runs",
        },
        widgetId: "dropdown",
        widgetNamespace: "builtin",
      },
    },
    {
      id: "crossOrigin",
      name: "Cross origin",
      type: "Symbol",
      validations: [
        {
          in: ["anonymous", "use-credentials"],
        },
      ],
      editorInterface: {
        settings: {
          helpText:
            "Controls how the browser handles cross-origin requests for this script",
        },
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
    },
  ],
};
