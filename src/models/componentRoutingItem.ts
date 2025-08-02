import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const componentRoutingItem = {
  sys: { id: "componentRoutingItem" },
  name: "Component / Routing Item",
  description:
    "A generic routing item component that can be used in various navigation contexts with configurable content.",
  fields: [
    createField("shortText", {
      id: "heading",
      name: "Heading",
      size: { min: 1, max: 100 },
      displayField: true,
    }),
    createField("shortText", {
      id: "subheadingText",
      name: "Subheading Text",
      size: { max: 80 },
    }),
    createField("shortText", {
      id: "eyebrowText",
      name: "Eyebrow Text",
      size: { min: 1, max: 60 },
    }),
    createField("shortText", {
      id: "description",
      name: "Description",
      size: { max: 100 },
    }),
    createField("entryReference", {
      id: "link",
      name: "Link",
      linkContentType: ["componentLink"],
    }),
    createField("assetReference", {
      id: "image",
      name: "Image",
      imagesOnly: true,
      editorInterface: {
        settings: { helpText: "21:9 aspect ratio recommended for cards" },
      },
    }),
  ],
} as const satisfies ExpandedContentModel;
