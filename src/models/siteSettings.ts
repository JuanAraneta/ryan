import type { ContentModel } from "contentful-code-models";

export const siteSettings: ContentModel = {
  sys: {
    id: "siteSettings",
  },
  name: "Site settings",
  description:
    "Stores global configuration and shared settings for the site, including confirmation IDs for external tools (like analytics), social media links and other site-wide defaults. This content type ensures consistent configuration across all pages and regions.",
  displayField: "siteName",
  fields: [
    {
      id: "siteName",
      name: "Site name",
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
      id: "facebookPixelId",
      name: "Facebook pixel ID",
      type: "Symbol",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
    },
    {
      id: "googleTagManagerId",
      name: "Google tag manager ID",
      type: "Symbol",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
    },
    {
      id: "googleAnalyticsId",
      name: "Google analytics ID",
      type: "Symbol",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
    },
    {
      id: "scripts",
      name: "Scripts",
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
            linkContentType: ["script"],
          },
        ],
        linkType: "Entry",
      },
    },
    {
      id: "market",
      name: "Default market",
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
  ],
  editorInterface: {
    sidebar: [
      {
        settings: {},
        widgetId: "publication-widget",
        widgetNamespace: "sidebar-builtin",
      },
      {
        settings: {},
        widgetId: "content-preview-widget",
        widgetNamespace: "sidebar-builtin",
      },
      {
        settings: {},
        widgetId: "incoming-links-widget",
        widgetNamespace: "sidebar-builtin",
      },
      {
        settings: {},
        widgetId: "translation-widget",
        widgetNamespace: "sidebar-builtin",
      },
      {
        settings: {},
        widgetId: "versions-widget",
        widgetNamespace: "sidebar-builtin",
      },
      {
        disabled: true,
        settings: {},
        widgetId: "releases-widget",
        widgetNamespace: "sidebar-builtin",
      },
    ],
    controls: [
      {
        fieldId: "siteName",
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "facebookPixelId",
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "googleTagManagerId",
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "googleAnalyticsId",
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "scripts",
        widgetId: "entryLinksEditor",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "market",
        widgetId: "entryLinkEditor",
        widgetNamespace: "builtin",
      },
    ],
  },
};
