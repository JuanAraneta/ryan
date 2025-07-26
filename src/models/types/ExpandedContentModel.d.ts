import { ContentModel } from "contentful-code-models";
import { ExpandedFieldDetails } from "./ExpandedFieldDetails";

export type ExpandedContentModel = Omit<ContentModel, "fields"> & {
  fields: Array<ExpandedFieldDetails>;
};
