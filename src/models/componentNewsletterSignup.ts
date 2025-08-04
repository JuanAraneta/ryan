import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const componentNewsletterSignup = {
  sys: { id: "componentNewsletterSignup" },
  name: "Newsletter signup",
  description:
    "A newsletter signup form component for collecting email subscriptions.",
  fields: [
    createField("contentfulLabel"),
    createField("shortText", {
      id: "subhead",
      name: "Subhead",
      validations: [{ size: { max: 80 } }],
    }),
  ],
} as const satisfies ExpandedContentModel;
