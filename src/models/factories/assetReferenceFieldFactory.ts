import { DeepPartial } from "@/types/utils/DeepPartial";
import { ExpandedFieldDetails } from "../types/ExpandedFieldDetails";
import merge from "lodash/merge";

export const assetReferenceFieldFactory = ({
  array = false,
  imagesOnly = false,
  linkMimetypeGroup = imagesOnly ? ["image"] : undefined,
  size,
  validations = [],
  ...props
}: {
  linkMimetypeGroup?: Array<string>;
  id: string;
  name: string;
  imagesOnly?: boolean;
} & (
  | { array?: false; size?: undefined }
  | { array: true; size: { min?: number; max: number } }
) &
  DeepPartial<
    Omit<ExpandedFieldDetails, "type" | "id" | "name">
  >): ExpandedFieldDetails =>
  merge(
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
            validations: [{ linkMimetypeGroup }, ...validations],
            linkType: "Asset",
          },
          editorInterface: {
            widgetId: "assetLinksEditor",
          },
        }
      : {
          type: "Link",
          validations: [{ linkMimetypeGroup }, ...validations],
          linkType: "Asset",
          editorInterface: {
            widgetId: "assetLinkEditor",
          },
        },
    props,
  );
