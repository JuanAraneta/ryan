import { DeepPartial } from "@/types/utils/DeepPartial";
import { ExpandedFieldDetails } from "../types/ExpandedFieldDetails";
import merge from "lodash/merge";

type ShortTextFieldFactoryProps = {
  id: string;
  name: string;
} & { array?: boolean; size?: { min?: number; max?: number } };

type PartialFieldDetails = Omit<ExpandedFieldDetails, "id" | "name" | "type">;

export const shortTextFieldFactory = ({
  array = false,
  size,
  ...props
}: ShortTextFieldFactoryProps &
  DeepPartial<PartialFieldDetails>): ExpandedFieldDetails => {
  const baseOptions = {
    editorInterface: { widgetNamespace: "builtin" },
  } as PartialFieldDetails;

  const validations = size ? [{ size }] : [];

  return merge(
    baseOptions,
    array
      ? {
          type: "Array",
          validations,
          items: { type: "Symbol" },
          editorInterface: { widgetId: "tagEditor" },
        }
      : {
          type: "Symbol",
          editorInterface: { widgetId: "singleLine" },
          validations,
        },
    props,
  );
};
