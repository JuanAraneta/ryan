import { DeepPartial } from "@/types/utils/DeepPartial";
import { ExpandedFieldDetails } from "../types/ExpandedFieldDetails";
import merge from "lodash/merge";

export const shortTextFieldFactory = (
  props: {
    id: string;
    name: string;
  } & DeepPartial<Omit<ExpandedFieldDetails, "id" | "name" | "type">>,
): ExpandedFieldDetails =>
  merge({
    type: "Symbol",
    editorInterface: {
      widgetId: "singleLine",
      widgetNamespace: "builtin",
    },
    ...props,
  });
