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
    createField("shortText", {
      id: "description",
      name: "Description or Quote",
    }),
    createField("shortText", {
      id: "attribution",
      name: "Attribution (e.g., Name | Title)",
    }),
    createField("video", { id: "video", name: "Video", required: true }),
  ],
} as const satisfies ExpandedContentModel;
