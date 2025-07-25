import type { ContentModel } from "contentful-code-models";

export const seoMetadata: ContentModel = {
  sys: {
    id: "seoMetadata",
  },
  name: "SEO Metadata",
  description:
    "Stores SEO-related information such as meta titles, descriptions, canonical URLs, and Open Graph / social sharing data. This content type helps optimize how pages appear in search engines and social platforms, improving visibility and click-through rates.",
  displayField: "pageTitle",
  fields: [
    {
      id: "pageTitle",
      name: "Page title",
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
      id: "seoTitle",
      name: "SEO title",
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
      id: "seoDescription",
      name: "SEO Description",
      type: "Symbol",
      localized: false,
      required: true,
      validations: [],
      disabled: false,
      omitted: false,
    },
    {
      id: "featuredImage",
      name: "Featured image",
      type: "Link",
      localized: false,
      required: true,
      validations: [
        {
          linkMimetypeGroup: ["image"],
          message: "Please use an image type",
        },
        {
          assetImageDimensions: {
            width: {
              max: 1260,
            },
            height: {
              max: 630,
            },
          },
          message: "Image cannot be bigger than 1260x630 pixels",
        },
        {
          assetFileSize: {
            max: 512000,
          },
        },
      ],
      disabled: false,
      omitted: false,
      linkType: "Asset",
    },
    {
      id: "canonicalUrl",
      name: "Canonical URL",
      type: "Symbol",
      localized: false,
      required: true,
      validations: [],
      disabled: false,
      omitted: false,
    },
    {
      id: "noIndex",
      name: "No index",
      type: "Boolean",
      localized: false,
      required: true,
      validations: [],
      disabled: false,
      omitted: false,
    },
    {
      id: "noFollow",
      name: "No follow",
      type: "Boolean",
      localized: false,
      required: true,
      validations: [],
      disabled: false,
      omitted: false,
    },
  ],
  editorInterface: {
    controls: [
      {
        fieldId: "pageTitle",
        settings: {
          helpText:
            "The main title of the page as it appears in the browser tab. Helps users understand what the page is about. Keep it concise and relevant.",
        },
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "seoTitle",
        settings: {
          helpText:
            "The title shown in search engine results. Should include keywords and be under 60 characters for best visibility.",
        },
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "seoDescription",
        settings: {
          helpText:
            "A short summary of the page content shown in search engine results. Aim for 150–160 characters and include relevant keywords naturally.",
        },
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "featuredImage",
        settings: {
          helpText:
            "Recommended: JPG or PNG, 1200x630px, under 500KB. This image is used for social sharing and should visually represent the page.",
          showLinkEntityAction: true,
          showCreateEntityAction: true,
        },
        widgetId: "assetLinkEditor",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "canonicalUrl",
        settings: {
          helpText:
            "The preferred URL for this page to avoid duplicate content issues. Use only if this content appears in multiple places or URLs.",
        },
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "noIndex",
        settings: {
          helpText:
            "If enabled, search engines will not index this page. Use for thank-you pages, gated content, or internal-only pages.",
          trueLabel: "Yes",
          falseLabel: "No",
        },
        widgetId: "boolean",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "noFollow",
        settings: {
          helpText:
            "If enabled, tells search engines not to follow links on this page. Use only when you don’t want to pass SEO value to outbound links.",
          trueLabel: "Yes",
          falseLabel: "No",
        },
        widgetId: "boolean",
        widgetNamespace: "builtin",
      },
    ],
  },
};
