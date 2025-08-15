import { market } from "./market";
import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const constants = {
  sys: { id: "constants" },
  name: "Constants",
  description:
    "All constant strings that get used in multiple places throughout the application.",
  fields: [
    createField("contentfulLabel"),
    createField("entryReference", {
      id: "defaultMarket",
      name: "Default market",
      required: true,
      linkContentType: [market],
    }),
    createField("shortText", {
      id: "previousButtonAriaLabel",
      name: "Previous button ARIA label",
      required: true,
    }),
    createField("shortText", {
      id: "nextButtonAriaLabel",
      name: "Next button ARIA label",
      required: true,
    }),
    createField("shortText", {
      id: "scrollbarThumbLabel",
      name: "Scrollbar thumb ARIA label",
      required: true,
    }),
    createField("shortText", {
      id: "scrollbarTrackAriaLabel",
      name: "Scrollbar track ARIA label",
      required: true,
    }),
    createField("shortText", {
      id: "subscribeButtonLabel",
      name: "Subscribe button label",
      required: true,
    }),
    createField("shortText", {
      id: "seeMore",
      name: "See more button label",
      required: true,
    }),
    createField("shortText", {
      id: "exploreButtonLabel",
      name: "Explore button label",
    }),
    createField("singletonLock"),
  ],
} as const satisfies ExpandedContentModel;
