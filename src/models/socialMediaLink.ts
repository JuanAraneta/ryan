import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const socialMediaLink = {
  sys: {
    id: "socialMediaLink",
  },
  name: "Social media link",
  description:
    "Stores information for individual social media profiles per region/market. This allows localized branding and targeting by associating links with specific markets (e.g., US Facebook page, UK LinkedIn page).",
  fields: [
    createField("shortText", {
      id: "platformName",
      name: "Platform name",
      displayField: true,
      required: true,
      editorInterface: {
        settings: {
          helpText:
            "The name of the social media platform (e.g., Facebook, LinkedIn, X/Twitter, YouTube, Instagram). You can use a dropdown to enforce consistency.",
        },
      },
    }),
    createField("shortText", {
      id: "url",
      name: "URL",
      required: true,
      validations: [
        {
          regexp: {
            pattern:
              "^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-/]))?$",
            //@ts-expect-error Package type error. This is valid.
            flags: null,
          },
        },
      ],
      editorInterface: {
        settings: {
          helpText:
            "The full link to the social media profile (e.g., https://linkedin.com/company/ryan-tax). Must be a valid URL.",
        },
      },
    }),
    createField("assetReference", {
      id: "icon",
      name: "Icon",
      required: true,
      imagesOnly: true,
      validations: [{ assetFileSize: { max: 51200 } }],
      editorInterface: {
        settings: {
          helpText:
            "Upload the icon for this social platform. SVG is recommended for better rendering and accessibility.",
        },
      },
    }),
  ],
} as const satisfies ExpandedContentModel;
