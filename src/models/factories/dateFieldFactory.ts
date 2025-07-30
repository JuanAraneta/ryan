import { DeepPartial } from "@/types/utils/DeepPartial";
import { ExpandedFieldDetails } from "../types/ExpandedFieldDetails";
import merge from "lodash/merge";

export const dateFieldFactory = (
  props: {
    id: string;
    name: string;
  } & DeepPartial<Omit<ExpandedFieldDetails, "id" | "name" | "type">>,
): ExpandedFieldDetails =>
  merge(
    {
      type: "Date",
      editorInterface: {
        settings: {
          ampm: "24",
          format: "timeZ",
        },
      },
    } as Omit<ExpandedFieldDetails, "id" | "name">,
    props,
  );
