import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";
import { componentLink } from "./componentLink";
import { componentCustomerStoryCard } from "./componentCustomerStoryCard";

export const moduleCustomerStoriesCarouselShort = {
  sys: { id: "moduleCustomerStoriesCarouselShort" },
  name: "Module / Customer Stories Carousel Short",
  description:
    "A compact horizontal carousel module featuring customer success metrics with cards displaying key statistics and client information.",
  fields: [
    createField("contentfulLabel"),
    createField("richText", { id: "headline", name: "Headline" }),
    createField("entryReference", {
      id: "cta",
      name: "CTA",
      linkContentType: [componentLink],
    }),
    createField("entryReference", {
      array: true,
      id: "customerStoryCards",
      name: "Customer Story Cards",
      required: true,
      size: { min: 3, max: 10 },
      linkContentType: [componentCustomerStoryCard],
    }),
  ],
} as const satisfies ExpandedContentModel;
