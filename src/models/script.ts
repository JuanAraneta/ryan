import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const script = {
  sys: {
    id: "script",
  },
  name: "Script",
  description:
    "Manages custom scripts (e.g., analytics, cookie consent, marketing tags) that should be injected into the website. Supports external sources and inline code. Use with caution to ensure performance and security best practices.",
  fields: [
    createField("shortText", {
      id: "id",
      name: "Id",
      displayField: true,
      required: true,
      validations: [{ unique: true }],
      defaultValue: { "en-US": "A unique identifier for this script" },
      editorInterface: {
        settings: { helpText: "A unique identifier for this script" },
      },
    }),
    createField("shortText", {
      id: "source",
      name: "Source",
      required: true,
      validations: [
        { unique: true },
        {
          regexp: {
            pattern:
              "^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-/]))?$",
            //@ts-expect-error Package type error. This is valid.
            flags: null,
          },
        },
      ],
      editorInterface: { widgetId: "urlEditor" },
    }),
    createField("shortText", {
      id: "strategy",
      name: "Strategy",
      required: true,
      validations: [
        {
          in: ["beforeInteractive", "afterInteractive", "lazyOnload", "worker"],
        },
      ],
      defaultValue: { "en-US": "beforeInteractive" },
      editorInterface: {
        settings: {
          helpText: "Determines when and how the script should load",
        },
        widgetId: "dropdown",
      },
    }),
    // No factory for this because in 99% of cases, we should be using RichText in place of this type
    {
      id: "inlineScript",
      name: "Inline script",
      type: "Text",
      editorInterface: {
        widgetId: "markdown",
        widgetNamespace: "builtin",
      },
    },
    createField("shortText", {
      id: "executionStrategy",
      name: "Execution strategy",
      validations: [{ in: ["async", "defer"] }],
      editorInterface: {
        settings: { helpText: "Controls how and when the script runs" },
        widgetId: "dropdown",
      },
    }),
    createField("shortText", {
      id: "crossOrigin",
      name: "Cross origin",
      validations: [{ in: ["anonymous", "use-credentials"] }],
      editorInterface: {
        settings: {
          helpText:
            "Controls how the browser handles cross-origin requests for this script",
        },
      },
    }),
  ],
} as const satisfies ExpandedContentModel;
