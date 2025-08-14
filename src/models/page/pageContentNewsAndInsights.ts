import { componentNewsAndInsights } from "../componentNewsAndInsights";
import { ExpandedContentModel } from "../types/ExpandedContentModel";
import { createField } from "../utils/createField";

export const pageContentNewsAndInsights = {
  sys: { id: "pageContentNewsAndInsights" },
  name: "Page content / News & insights",
  description:
    'Page representation for news & insights. All pages of this type are nested under the "/news-and-insights" path.',
  fields: [
    createField("contentfulLabel"),
    createField("entryReference", {
      id: "subject",
      name: "Subject",
      required: true,
      linkContentType: [componentNewsAndInsights],
    }),
  ],
} as const satisfies ExpandedContentModel;
