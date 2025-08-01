import { DeepPartial } from "@/types/utils/DeepPartial";
import { ExpandedFieldDetails } from "../types/ExpandedFieldDetails";
import merge from "lodash/merge";
import { ExpandedContentModel } from "../types/ExpandedContentModel";

export const entryReferenceFieldFactory = ({
  array = false,
  linkContentType: linkContentTypeProp,
  size,
  ...props
}: {
  // Only provide a string for self or circularly referencing types
  linkContentType: Array<string | ExpandedContentModel>;
  id: string;
  name: string;
} & (
  | { array?: false; size?: undefined }
  | { array: true; size: { min?: number; max: number } }
) &
  DeepPartial<
    Omit<ExpandedFieldDetails, "type" | "id" | "name">
  >): ExpandedFieldDetails => {
  const linkContentType = linkContentTypeProp.map((type) =>
    typeof type === "string" ? type : type?.sys?.id,
  );

  return merge(
    {
      editorInterface: {
        settings: {
          showLinkEntityAction: true,
          showCreateEntityAction: true,
        },
        widgetNamespace: "builtin",
      },
    } as Omit<ExpandedFieldDetails, "type" | "name" | "id">,
    array
      ? {
          type: "Array",
          validations: [{ size }],
          items: {
            type: "Link",
            validations: [{ linkContentType }],
            linkType: "Entry",
          },
          editorInterface: { widgetId: "entryLinksEditor" },
        }
      : {
          type: "Link",
          validations: [{ linkContentType }],
          linkType: "Entry",
          editorInterface: { widgetId: "entryLinkEditor" },
        },
    props,
  );
};
