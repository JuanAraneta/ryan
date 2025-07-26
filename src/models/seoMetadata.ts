import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const seoMetadata = {
  sys: {
    id: "seoMetadata",
  },
  name: "SEO Metadata",
  description:
    "Stores SEO-related information such as meta titles, descriptions, canonical URLs, and Open Graph / social sharing data. This content type helps optimize how pages appear in search engines and social platforms, improving visibility and click-through rates.",
  fields: [
    createField("shortText", {
      id: "pageTitle",
      name: "Page title",
      required: true,
      displayField: true,
      validations: [{ unique: true }],
      editorInterface: {
        settings: {
          helpText:
            "The main title of the page as it appears in the browser tab. Helps users understand what the page is about. Keep it concise and relevant.",
        },
      },
    }),
    createField("shortText", {
      id: "seoTitle",
      name: "SEO title",
      required: true,
      validations: [{ unique: true }],
      editorInterface: {
        settings: {
          helpText:
            "The title shown in search engine results. Should include keywords and be under 60 characters for best visibility.",
        },
      },
    }),
    createField("shortText", {
      id: "seoDescription",
      name: "SEO Description",
      required: true,
      editorInterface: {
        settings: {
          helpText:
            "A short summary of the page content shown in search engine results. Aim for 150–160 characters and include relevant keywords naturally.",
        },
      },
    }),
    {
      id: "featuredImage",
      name: "Featured image",
      type: "Link",
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
      linkType: "Asset",
      editorInterface: {
        settings: {
          helpText:
            "Recommended: JPG or PNG, 1200x630px, under 500KB. This image is used for social sharing and should visually represent the page.",
          showLinkEntityAction: true,
          showCreateEntityAction: true,
        },
        widgetId: "assetLinkEditor",
        widgetNamespace: "builtin",
      },
    },
    createField("shortText", {
      id: "canonicalUrl",
      name: "Canonical URL",
      required: true,
      editorInterface: {
        settings: {
          helpText:
            "The preferred URL for this page to avoid duplicate content issues. Use only if this content appears in multiple places or URLs.",
        },
      },
    }),
    {
      id: "noIndex",
      name: "No index",
      type: "Boolean",
      required: true,
      editorInterface: {
        settings: {
          helpText:
            "If enabled, search engines will not index this page. Use for thank-you pages, gated content, or internal-only pages.",
          trueLabel: "Yes",
          falseLabel: "No",
        },
        widgetId: "boolean",
        widgetNamespace: "builtin",
      },
    },
    {
      id: "noFollow",
      name: "No follow",
      type: "Boolean",
      required: true,
      editorInterface: {
        settings: {
          helpText:
            "If enabled, tells search engines not to follow links on this page. Use only when you don’t want to pass SEO value to outbound links.",
          trueLabel: "Yes",
          falseLabel: "No",
        },
        widgetId: "boolean",
        widgetNamespace: "builtin",
      },
    },
  ],
} as const satisfies ExpandedContentModel;
