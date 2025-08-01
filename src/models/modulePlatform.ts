import { componentLink } from "./componentLink";
import { componentIconTextWrap } from "./componentIconTextWrap";
import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const modulePlatform = {
  sys: {
    id: "modulePlatform",
  },
  name: "Module / Platform",
  description:
    "Platform module with highlighted image and capability components",
  fields: [
    createField("contentfulLabel"),
    createField("richText", {
      id: "headline",
      name: "Headline",
    }),
    createField("entryReference", {
      id: "ctaButton",
      name: "CTA Button",
      linkContentType: [componentLink],
    }),
    createField("entryReference", {
      array: true,
      id: "capabilityComponents",
      name: "Capability Components",
      size: { max: 4 },
      linkContentType: [componentIconTextWrap],
    }),
    createField("assetReference", {
      id: "image",
      name: "Image",
      imagesOnly: true,
    }),

    createField("assetReference", {
      id: "leftOverlayAsset",
      name: "Left Overlay Asset",
      imagesOnly: true,
    }),
    createField("assetReference", {
      id: "rightOverlayAsset",
      name: "Right Overlay Asset",
      imagesOnly: true,
    }),
  ],
} as const satisfies ExpandedContentModel;
