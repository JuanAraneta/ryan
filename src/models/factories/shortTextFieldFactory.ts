import { DeepPartial } from "@/types/utils/DeepPartial";
import { ExpandedFieldDetails } from "../types/ExpandedFieldDetails";
import merge from "lodash/merge";

type ShortTextFieldFactoryProps = {
  id: string;
  name: string;
} & (
  | { array?: false; size?: undefined }
  | { array: true; size: { min?: number; max: number } }
);

type PartialFieldDetails = Omit<ExpandedFieldDetails, "id" | "name" | "type">;

export const shortTextFieldFactory = ({
  array = false,
  size,
  ...props
}: ShortTextFieldFactoryProps &
  DeepPartial<PartialFieldDetails>): ExpandedFieldDetails => {
  return merge(
    { editorInterface: { widgetNamespace: "builtin" } } as PartialFieldDetails,
    array
      ? {
          type: "Array",
          validations: [{ size }],
          items: { type: "Symbol" },
          editorInterface: { widgetId: "tagEditor" },
        }
      : { type: "Symbol", editorInterface: { widgetId: "singleLine" } },
    props,
  );
};
