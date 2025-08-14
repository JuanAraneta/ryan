import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const moduleGeneralVideoMission = {
  sys: { id: "moduleGeneralVideoMission" },
  name: "Module / General / Video mission",
  description: "Module for displaying a video with a mission statement",
  fields: [
    createField("shortText", {
      displayField: true,
      id: "headline",
      name: "Headline",
      required: true,
    }),
    createField("richText", { id: "body", name: "Body" }),
    createField("video", { id: "video", name: "Video", required: true }),
  ],
} as const satisfies ExpandedContentModel;
