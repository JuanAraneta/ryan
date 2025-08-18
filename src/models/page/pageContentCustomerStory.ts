import { componentCustomerStory } from "../componentCustomerStory";
import { ExpandedContentModel } from "../types/ExpandedContentModel";
import { createField } from "../utils/createField";

export const pageContentCustomerStory = {
  sys: { id: "pageContentCustomerStory" },
  name: "Page content / Customer story",
  description:
    'Page-content representation for customer-stories. All pages of this type are nested under the "/customer-story" path.',
  fields: [
    createField("contentfulLabel"),
    createField("entryReference", {
      id: "subject",
      name: "Subject",
      required: true,
      linkContentType: [componentCustomerStory],
    }),
  ],
} as const satisfies ExpandedContentModel;
