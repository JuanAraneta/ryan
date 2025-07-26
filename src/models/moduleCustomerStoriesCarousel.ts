import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const moduleCustomerStoriesCarousel: ExpandedContentModel = {
  sys: {
    id: "moduleCustomerStoriesCarousel",
  },
  name: "Module / Customer stories carousel",
  description:
    "A module for the homepage giving a carousel of articles describing customer stories.",
  fields: [
    createField("contentfulLabel"),
    createField("richText", { id: "richTextTitle", name: "Title" }),
    {
      id: "callToAction",
      name: "Call to action",
      type: "Link",
      validations: [
        {
          linkContentType: ["componentLink"],
        },
      ],
      linkType: "Entry",
      editorInterface: {
        widgetId: "entryLinkEditor",
        widgetNamespace: "builtin",
      },
    },
    {
      id: "customerStories",
      name: "Customer stories",
      type: "Array",
      validations: [
        {
          size: {
            max: 10,
          },
        },
      ],
      items: {
        type: "Link",
        validations: [
          {
            linkContentType: ["componentCustomerStory"],
          },
        ],
        linkType: "Entry",
      },
      editorInterface: {
        widgetId: "entryLinksEditor",
        widgetNamespace: "builtin",
      },
    },
  ],
};
