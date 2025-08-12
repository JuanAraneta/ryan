import { DeepPartial } from "@/types/utils/DeepPartial";
import { ExpandedFieldDetails } from "../types/ExpandedFieldDetails";
import merge from "lodash/merge";

export const brandfolderVideoFieldFactory = (
  props: {
    id: string;
    name: string;
  } & DeepPartial<Omit<ExpandedFieldDetails, "id" | "name" | "type">>,
): ExpandedFieldDetails =>
  merge(
    {
      type: "Object",
      localized: false,
      editorInterface: {
        widgetId: "bgBVVuNbfvUW5tpFnD20s",
        widgetNamespace: "app",
      },
    } as Omit<ExpandedFieldDetails, "id" | "name">,
    props,
  );
