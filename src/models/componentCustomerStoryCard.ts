import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";
import { pageContentCustomerStory } from "./page/pageContentCustomerStory";
import { componentStatistic } from "./componentStatistic";

export const componentCustomerStoryCard = {
  sys: { id: "componentCustomerStoryCard" },
  name: "Component / Customer Story Card",
  description:
    "A customer story card component for the carousel, featuring key statistics and client information.",
  fields: [
    createField("contentfulLabel"),
    createField("entryReference", {
      id: "pageContent",
      name: "Page content reference",
      required: true,
      linkContentType: [pageContentCustomerStory],
    }),
    createField("assetReference", {
      id: "backgroundImage",
      name: "Background Image",
      required: true,
      imagesOnly: true,
    }),
    createField("assetReference", {
      id: "clientLogo",
      name: "Client Logo",
      imagesOnly: true,
    }),
    createField("entryReference", {
      id: "statistic",
      name: "Statistic",
      required: true,
      linkContentType: [componentStatistic],
    }),
    createField("shortText", {
      // TODO: Should be link to something
      id: "tags",
      name: "Tags",
      array: true,
      size: { max: 3 },
    }),
  ],
} as const satisfies ExpandedContentModel;
