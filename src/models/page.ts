import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const page: ExpandedContentModel = {
  sys: {
    id: "page",
  },
  name: "Page",
  description:
    "Represents a single webpage on the site, such as a homepage, service page, landing page, or contact page. Supports flexible layouts through modular content, SEO metadata, market scoping, and localization.",
  displayField: "title",
  fields: [
    createField("shortText", {
      id: "title",
      name: "Title",
      required: true,
      validations: [{ unique: true }],
      editorInterface: {
        settings: {
          helpText:
            "Internal title for content editors. Will be used as the visible H1 on the page.",
        },
      },
    }),
    createField("shortText", {
      id: "slug",
      name: "Slug",
      required: true,
      editorInterface: {
        settings: {
          helpText:
            "The URL-friendly identifier for this page (e.g., about-us). Should be lowercase, with hyphens instead of spaces. No slashes.",
        },
      },
    }),
    {
      id: "market",
      name: "Market",
      type: "Link",
      required: true,
      validations: [
        {
          linkContentType: ["market"],
        },
      ],
      linkType: "Entry",
      editorInterface: {
        settings: {
          helpText:
            "The regional market this page belongs to (e.g., United States, Brazil). Required for routing and market-specific content.",
          showLinkEntityAction: true,
          showCreateEntityAction: true,
        },
        widgetId: "entryLinkEditor",
        widgetNamespace: "builtin",
      },
    },
    {
      id: "seoMetadata",
      name: "SEO metadata",
      type: "Link",
      required: true,
      validations: [
        {
          linkContentType: ["seoMetadata"],
        },
      ],
      linkType: "Entry",
      editorInterface: {
        settings: {
          helpText:
            "Optional override for SEO settings. If not set, the market’s default SEO settings will apply.",
          showLinkEntityAction: true,
          showCreateEntityAction: true,
        },
        widgetId: "entryLinkEditor",
        widgetNamespace: "builtin",
      },
    },
    {
      id: "header",
      name: "Header",
      type: "Link",
      required: true,
      validations: [
        {
          linkContentType: ["header"],
        },
      ],
      linkType: "Entry",
      editorInterface: {
        settings: {
          helpText: "Header that will be used on the page",
          showLinkEntityAction: true,
          showCreateEntityAction: true,
        },
        widgetId: "entryLinkEditor",
        widgetNamespace: "builtin",
      },
    },
    {
      id: "footer",
      name: "Footer",
      type: "Link",
      required: true,
      validations: [
        {
          linkContentType: ["footer"],
        },
      ],
      linkType: "Entry",
      editorInterface: {
        settings: {
          helpText: "Footer that will be used on the page",
          showLinkEntityAction: true,
          showCreateEntityAction: true,
        },
        widgetId: "entryLinkEditor",
        widgetNamespace: "builtin",
      },
    },
    {
      id: "modules",
      name: "Modules",
      type: "Array",
      validations: [
        {
          size: {
            max: 20,
          },
        },
      ],
      items: {
        type: "Link",
        validations: [
          {
            linkContentType: ["moduleContainer"],
          },
        ],
        linkType: "Entry",
      },
      editorInterface: {
        settings: {
          helpText: "Modules that will compose a page layout",
          bulkEditing: false,
          showLinkEntityAction: true,
          showCreateEntityAction: true,
        },
        widgetId: "entryLinksEditor",
        widgetNamespace: "builtin",
      },
    },
    {
      id: "pages",
      name: "Pages",
      type: "Array",
      items: {
        type: "Link",
        validations: [
          {
            linkContentType: ["page"],
          },
        ],
        linkType: "Entry",
      },
      editorInterface: {
        settings: {
          helpText:
            "Pages that will be child of the current page, e.g.: services/consulting, services/advisement",
          bulkEditing: false,
          showLinkEntityAction: true,
          showCreateEntityAction: true,
        },
        widgetId: "entryLinksEditor",
        widgetNamespace: "builtin",
      },
    },
  ],
};
