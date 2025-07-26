import type { ContentModel } from "contentful-code-models";

export const page: ContentModel = {
  sys: {
    id: "page",
  },
  name: "Page",
  description:
    "Represents a single webpage on the site, such as a homepage, service page, landing page, or contact page. Supports flexible layouts through modular content, SEO metadata, market scoping, and localization.",
  displayField: "title",
  fields: [
    {
      id: "title",
      name: "Titile",
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
      id: "slug",
      name: "Slug",
      type: "Symbol",
      localized: false,
      required: true,
      validations: [],
      disabled: false,
      omitted: false,
    },
    {
      id: "market",
      name: "Market",
      type: "Link",
      localized: false,
      required: true,
      validations: [
        {
          linkContentType: ["market"],
        },
      ],
      disabled: false,
      omitted: false,
      linkType: "Entry",
    },
    {
      id: "seoMetadata",
      name: "SEO metadata",
      type: "Link",
      localized: false,
      required: true,
      validations: [
        {
          linkContentType: ["seoMetadata"],
        },
      ],
      disabled: false,
      omitted: false,
      linkType: "Entry",
    },
    {
      id: "hero",
      name: "Hero",
      type: "Link",
      localized: false,
      required: true,
      validations: [
        {
          linkContentType: ["moduleHeroHome"],
        },
      ],
      disabled: false,
      omitted: false,
      linkType: "Entry",
    },
    {
      id: "footer",
      name: "Footer",
      type: "Link",
      localized: false,
      required: true,
      validations: [
        {
          linkContentType: ["footer"],
        },
      ],
      disabled: false,
      omitted: false,
      linkType: "Entry",
    },
    {
      id: "modules",
      name: "Modules",
      type: "Array",
      localized: false,
      required: false,
      validations: [
        {
          size: {
            max: 20,
          },
        },
      ],
      disabled: false,
      omitted: false,
      items: {
        type: "Link",
        validations: [
          {
            linkContentType: ["moduleContainer"],
          },
        ],
        linkType: "Entry",
      },
    },
    {
      id: "pages",
      name: "Pages",
      type: "Array",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
      items: {
        type: "Link",
        validations: [
          {
            linkContentType: ["page"],
          },
        ],
        linkType: "Entry",
      },
    },
  ],
  editorInterface: {
    controls: [
      {
        fieldId: "title",
        settings: {
          helpText:
            "Internal title for content editors. Will be used as the visible H1 on the page.",
        },
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "slug",
        settings: {
          helpText:
            "The URL-friendly identifier for this page (e.g., about-us). Should be lowercase, with hyphens instead of spaces. No slashes.",
        },
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "market",
        settings: {
          helpText:
            "The regional market this page belongs to (e.g., United States, Brazil). Required for routing and market-specific content.",
          showLinkEntityAction: true,
          showCreateEntityAction: true,
        },
        widgetId: "entryLinkEditor",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "seoMetadata",
        settings: {
          helpText:
            "Optional override for SEO settings. If not set, the market’s default SEO settings will apply.",
          showLinkEntityAction: true,
          showCreateEntityAction: true,
        },
        widgetId: "entryLinkEditor",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "footer",
        settings: {
          helpText: "Footer that will be used on the page",
          showLinkEntityAction: true,
          showCreateEntityAction: true,
        },
        widgetId: "entryLinkEditor",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "modules",
        settings: {
          helpText: "Modules that will compose a page layout",
          bulkEditing: false,
          showLinkEntityAction: true,
          showCreateEntityAction: true,
        },
        widgetId: "entryLinksEditor",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "pages",
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
    ],
  },
};
