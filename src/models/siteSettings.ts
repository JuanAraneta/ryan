import { ExpandedContentModel } from "./types/ExpandedContentModel";

export const siteSettings: ExpandedContentModel = {
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
      required: true,
      validations: [
        {
          unique: true,
        },
      ],
      editorInterface: {
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
    },
    {
      id: "facebookPixelId",
      name: "Facebook pixel ID",
      type: "Symbol",
      validations: [],
      editorInterface: {
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
    },
    {
      id: "googleTagManagerId",
      name: "Google tag manager ID",
      type: "Symbol",
      validations: [],
      editorInterface: {
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
    },
    {
      id: "googleAnalyticsId",
      name: "Google analytics ID",
      type: "Symbol",
      validations: [],
      editorInterface: {
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
    },
    {
      id: "scripts",
      name: "Scripts",
      type: "Array",
      validations: [],
      items: {
        type: "Link",
        validations: [
          {
            linkContentType: ["script"],
          },
        ],
        linkType: "Entry",
      },
      editorInterface: {
        widgetId: "entryLinksEditor",
        widgetNamespace: "builtin",
      },
    },
    {
      id: "market",
      name: "Default market",
      type: "Link",
      required: true,
      validations: [
        {
          linkContentType: ["market"],
        },
      ],
      linkType: "Entry",
      editorInterface: {
        widgetId: "entryLinkEditor",
        widgetNamespace: "builtin",
      },
    },
  ],
};
