import { ExpandedContentModel } from "./types/ExpandedContentModel";

export const socialMediaLink: ExpandedContentModel = {
  sys: {
    id: "socialMediaLink",
  },
  name: "Social media link",
  description:
    "Stores information for individual social media profiles per region/market. This allows localized branding and targeting by associating links with specific markets (e.g., US Facebook page, UK LinkedIn page).",
  displayField: "platformName",
  fields: [
    {
      id: "platformName",
      name: "Platform name",
      type: "Symbol",
      required: true,
      validations: [],
      editorInterface: {
        settings: {
          helpText:
            "The name of the social media platform (e.g., Facebook, LinkedIn, X/Twitter, YouTube, Instagram). You can use a dropdown to enforce consistency.",
        },
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
    },
    {
      id: "url",
      name: "URL",
      type: "Symbol",
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
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
    },
    {
      id: "icon",
      name: "Icon",
      type: "Link",
      required: true,
      validations: [
        {
          linkMimetypeGroup: ["image"],
        },
        {
          assetFileSize: {
            max: 51200,
          },
        },
      ],
      linkType: "Asset",
      editorInterface: {
        settings: {
          helpText:
            "Upload the icon for this social platform. SVG is recommended for better rendering and accessibility.",
          showLinkEntityAction: true,
          showCreateEntityAction: true,
        },
        widgetId: "assetLinkEditor",
        widgetNamespace: "builtin",
      },
    },
  ],
};
