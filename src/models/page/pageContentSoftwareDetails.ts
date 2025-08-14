import { componentSoftwareDetails } from "../componentSoftwareDetails";
import { ExpandedContentModel } from "../types/ExpandedContentModel";
import { createField } from "../utils/createField";

export const pageContentSoftwareDetails = {
  sys: { id: "pageContentSoftwareDetails" },
  name: "Page content / Software details",
  description:
    'Page-content which details a software product. All pages of this type are nested under the "/software" path.',
  fields: [
    createField("contentfulLabel"),
    createField("entryReference", {
      id: "subject",
      name: "Subject",
      required: true,
      linkContentType: [componentSoftwareDetails],
    }),
  ],
} as const satisfies ExpandedContentModel;
