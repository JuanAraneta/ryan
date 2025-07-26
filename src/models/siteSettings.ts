import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const siteSettings = {
  sys: {
    id: "siteSettings",
  },
  name: "Site settings",
  description:
    "Stores global configuration and shared settings for the site, including confirmation IDs for external tools (like analytics), social media links and other site-wide defaults. This content type ensures consistent configuration across all pages and regions.",
  displayField: "siteName",
  fields: [
    createField("shortText", {
      id: "siteName",
      name: "Site name",
      required: true,
      validations: [{ unique: true }],
    }),
    createField("shortText", {
      id: "facebookPixelId",
      name: "Facebook pixel ID",
    }),
    createField("shortText", {
      id: "googleTagManagerId",
      name: "Google tag manager ID",
    }),
    createField("shortText", {
      id: "googleAnalyticsId",
      name: "Google analytics ID",
    }),
    {
      id: "scripts",
      name: "Scripts",
      type: "Array",
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
} as const satisfies ExpandedContentModel;
