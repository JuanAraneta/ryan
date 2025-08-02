import { market } from "./market";
import { script } from "./script";
import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const siteSettings = {
  sys: { id: "siteSettings" },
  name: "Site settings",
  description:
    "Stores global configuration and shared settings for the site, including confirmation IDs for external tools (like analytics), social media links and other site-wide defaults. This content type ensures consistent configuration across all pages and regions.",
  fields: [
    createField("shortText", {
      id: "siteName",
      name: "Site name",
      required: true,
      displayField: true,
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
    createField("entryReference", {
      array: true,
      id: "scripts",
      name: "Scripts",
      size: { max: 100 },
      linkContentType: [script],
    }),
    createField("entryReference", {
      id: "market",
      name: "Default market",
      required: true,
      linkContentType: [market],
    }),
  ],
} as const satisfies ExpandedContentModel;
