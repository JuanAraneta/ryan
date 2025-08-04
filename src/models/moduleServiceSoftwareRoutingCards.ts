import { componentLink } from "./componentLink";
import { componentStatistic } from "./componentStatistic";
import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const componentServiceSoftwareRoutingCard = {
  sys: {
    id: "componentServiceSoftwareRoutingCard",
  },
  name: "Component / Service & software routing card",
  description: "",
  fields: [
    createField("shortText", {
      id: "title",
      name: "Title",
      displayField: true,
    }),
    createField("richText", { id: "body", name: "Body" }),
    createField("entryReference", {
      id: "statistic",
      name: "Statistic",
      linkContentType: [componentStatistic],
    }),
    createField("assetReference", { id: "image", name: "Image" }),
    createField("entryReference", {
      id: "link",
      name: "Link",
      linkContentType: [componentLink],
    }),
  ],
} as const satisfies ExpandedContentModel;

export const moduleServiceSoftwareRoutingCards = {
  sys: {
    id: "moduleServiceSoftwareRoutingCards",
  },
  name: "Module / Service & software routing cards",
  description: "",
  fields: [
    createField("contentfulLabel"),
    createField("richText", { id: "headline", name: "Headline" }),
    createField("entryReference", {
      array: true,
      size: { min: 2, max: 2 },
      id: "cards",
      name: "Cards",
      linkContentType: [componentServiceSoftwareRoutingCard],
    }),
  ],
} as const satisfies ExpandedContentModel;
