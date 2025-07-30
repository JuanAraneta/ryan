import { DeepPartial } from "@/types/utils/DeepPartial";
import { ExpandedFieldDetails } from "../types/ExpandedFieldDetails";
import merge from "lodash/merge";

export const booleanFieldFactory = (
  props: {
    id: string;
    name: string;
  } & DeepPartial<Omit<ExpandedFieldDetails, "id" | "name" | "type">>,
): ExpandedFieldDetails =>
  merge(
    {
      type: "Boolean",
      editorInterface: {
        settings: {
          trueLabel: "Yes",
          falseLabel: "No",
        },
        widgetId: "boolean",
        widgetNamespace: "builtin",
      },
    } as Omit<ExpandedFieldDetails, "id" | "name">,
    props,
  );
