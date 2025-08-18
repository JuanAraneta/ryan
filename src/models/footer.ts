import { componentLink } from "./componentLink";
import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const footerColumn = {
  sys: { id: "footerColumn" },
  name: "Footer column",
  description:
    "The columns the make up the navigation model available in the footer.",
  fields: [
    createField("shortText", {
      id: "title",
      name: "Title",
      displayField: true,
    }),
    createField("entryReference", {
      id: "links",
      name: "Links",
      array: true,
      size: { min: 1, max: 10 },
      linkContentType: [componentLink],
    }),
  ],
} as const satisfies ExpandedContentModel;

export const socialMediaLink = {
  sys: { id: "socialMediaLink" },
  name: "Social media link",
  description: "Social media links with platform name & icon.",
  fields: [
    createField("shortText", {
      id: "platformName",
      name: "Platform name",
      displayField: true,
      editorInterface: {
        settings: {
          helpText:
            "Enter the official platform name (e.g., Facebook, Twitter).",
        },
      },
    }),
    createField("entryReference", {
      id: "link",
      name: "Link",
      linkContentType: [componentLink],
    }),
    createField("icon", { id: "icon", name: "Icon" }),
  ],
} as const satisfies ExpandedContentModel;

export const socialMediaFooterSection = {
  sys: { id: "socialMediaFooterSection" },
  name: "Social media footer section",
  description:
    "The collection of social media links displayed the in the footer.",
  fields: [
    createField("shortText", {
      id: "title",
      name: "Title",
      displayField: true,
    }),
    createField("entryReference", {
      id: "link",
      name: "Link",
      array: true,
      size: { min: 1, max: 10 },
      linkContentType: [socialMediaLink],
    }),
  ],
} as const satisfies ExpandedContentModel;

export const footer = {
  sys: { id: "footer" },
  name: "Footer",
  description: "The overall structure for the footer, unique per market.",
  fields: [
    createField("contentfulLabel"),
    createField("assetReference", {
      id: "logo",
      name: "Logo",
      imagesOnly: true,
    }),
    createField("entryReference", {
      id: "columns",
      name: "Columns",
      array: true,
      size: { max: 10 },
      linkContentType: [footerColumn],
    }),
    createField("entryReference", {
      id: "socialMedia",
      name: "Social media",
      linkContentType: [socialMediaFooterSection],
    }),
    createField("entryReference", {
      id: "legalLinks",
      name: "Legal links",
      array: true,
      size: { max: 10 },
      linkContentType: [componentLink],
    }),
    createField("shortText", {
      id: "copyright",
      name: "Copyright",
    }),
  ],
} as const satisfies ExpandedContentModel;
