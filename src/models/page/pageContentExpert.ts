import { componentExpert } from "../componentExpert";
import { ExpandedContentModel } from "../types/ExpandedContentModel";
import { createField } from "../utils/createField";

export const pageContentExpert = {
  sys: { id: "pageContentExpert" },
  name: "Page content / Expert",
  description:
    'Page representation for expert-bios. All pages of this type are nested under the "/expert" path.',
  fields: [
    createField("contentfulLabel"),
    createField("entryReference", {
      id: "subject",
      name: "Subject",
      required: true,
      linkContentType: [componentExpert],
    }),
  ],
} as const satisfies ExpandedContentModel;
