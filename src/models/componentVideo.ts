import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const componentVideo = {
  sys: { id: "componentVideo" },
  name: "Component / Video",
  description:
    "The standard type for representing video content within the application.",
  fields: [
    createField("contentfulLabel"),
    createField("videoSource", {
      id: "source",
      name: "Source",
    }),
    createField("brandfolderVideo", {
      id: "brandfolderVideo",
      name: "Brandfolder Video",
      localized: false,
      required: false,
    }),
    createField("wistiaVideo", {
      id: "wistiaVideo",
      name: "Wistia Video",
      localized: false,
      required: false,
    }),
    createField("shortText", {
      id: "youtubeId",
      name: "YouTube Video ID",
      localized: false,
      required: false,
    }),
  ],
} as const satisfies ExpandedContentModel;
