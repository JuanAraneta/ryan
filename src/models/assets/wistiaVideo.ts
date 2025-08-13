import { ExpandedContentModel } from "../types/ExpandedContentModel";
import { createField } from "../utils/createField";

export const wistiaVideo = {
  sys: { id: "wistiaVideo" },
  name: "Wistia Video",
  description: "The standard type for representing Wistia videos.",
  fields: [
    createField("shortText", {
      id: "title",
      name: "Title",
      displayField: true,
    }),
    createField("assetReference", {
      id: "thumbnail",
      name: "Thumbnail",
      imagesOnly: true,
    }),
    {
      id: "wistiaVideo",
      name: "Wistia Video",
      type: "Object",
      localized: false,
      editorInterface: {
        widgetId: "6StWOM1AZBDHDjynDkm1iz",
        widgetNamespace: "app",
      },
      validations: [{ size: { min: 1, max: 1 } }],
    },
  ],
} as const satisfies ExpandedContentModel;
