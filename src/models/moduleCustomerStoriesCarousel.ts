import { pageCustomerStory } from "./pageCustomerStory";
import { componentLink } from "./componentLink";
import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const moduleCustomerStoriesCarousel = {
  sys: { id: "moduleCustomerStoriesCarousel" },
  name: "Module / Customer stories carousel",
  description:
    "A module for the homepage giving a carousel of articles describing customer stories.",
  fields: [
    createField("contentfulLabel"),
    createField("richText", { id: "richTextTitle", name: "Title" }),
    createField("entryReference", {
      id: "callToAction",
      name: "Call to action",
      linkContentType: [componentLink],
    }),
    createField("entryReference", {
      array: true,
      id: "customerStories",
      name: "Customer stories",
      size: { max: 10 },
      linkContentType: [pageCustomerStory],
    }),
  ],
} as const satisfies ExpandedContentModel;
