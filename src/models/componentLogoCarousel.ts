import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const componentLogoCarousel = {
  sys: { id: "componentLogoCarousel" },
  name: "Component / Logo carousel",
  description:
    "A component representing a carousel of logos. Created so that a small set of instances can be shared.",
  fields: [
    createField("contentfulLabel"),
    createField("assetReference", {
      array: true,
      id: "logos",
      name: "Logos",
      imagesOnly: true,
      size: { max: 20 },
    }),
  ],
} as const satisfies ExpandedContentModel;
