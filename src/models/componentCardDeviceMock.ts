import { componentLink } from "./componentLink";
import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const componentCardDeviceMock = {
  sys: { id: "componentCardDeviceMock" },
  name: "Category solutions / Card & device mock",
  description: "Often the card that is the headline container for a chapter.",
  fields: [
    createField("shortText", {
      id: "title",
      name: "Title",
      displayField: true,
    }),
    createField("moduleBackground", { variant: "dark" }),
    createField("richText", { id: "richTextBody", name: "Body" }),
    createField("entryReference", {
      id: "callToAction",
      name: "Call to action",
      linkContentType: [componentLink],
    }),
    createField("assetReference", {
      id: "deviceMock",
      name: "Device mock",
      imagesOnly: true,
    }),
  ],
} as const satisfies ExpandedContentModel;
