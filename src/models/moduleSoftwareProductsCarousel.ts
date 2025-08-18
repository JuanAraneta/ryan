import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";
import { componentLink } from "./componentLink";
import { pageContentSoftwareDetails } from "./page/pageContentSoftwareDetails";

export const moduleSoftwareProductsCarousel = {
  sys: { id: "moduleSoftwareProductsCarousel" },
  name: "Module / Software Products Carousel",
  description:
    "Intro block with headline, body, CTA, practice-area filter tags, and a horizontal carousel of software product cards.",
  fields: [
    createField("shortText", {
      id: "headline",
      name: "Headline",
      required: true,
      displayField: true,
      size: { min: 10, max: 60 },
    }),
    createField("shortText", {
      id: "body",
      name: "Body",
      required: true,
      size: { min: 80, max: 200 },
    }),
    createField("entryReference", {
      id: "cta",
      name: "CTA",
      linkContentType: [componentLink],
    }),
    createField("entryReference", {
      id: "softwareProducts",
      name: "Software Products",
      array: true,
      size: { max: 10 },
      linkContentType: [pageContentSoftwareDetails],
    }),
  ],
} as const satisfies ExpandedContentModel;
