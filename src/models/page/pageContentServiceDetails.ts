import { componentServiceDetails } from "../componentServiceDetails";
import { ExpandedContentModel } from "../types/ExpandedContentModel";
import { createField } from "../utils/createField";

export const pageContentServiceDetails = {
  sys: { id: "pageContentServiceDetails" },
  name: "Page content / Service details",
  description:
    'Page which details a service product. All pages of this type are nested under the "/software" path.',
  fields: [
    createField("contentfulLabel"),
    createField("entryReference", {
      id: "subject",
      name: "Subject",
      required: true,
      linkContentType: [componentServiceDetails],
    }),
  ],
} as const satisfies ExpandedContentModel;
