import { DeepPartial } from "@/types/utils/DeepPartial";
import { ExpandedFieldDetails } from "../types/ExpandedFieldDetails";
import merge from "lodash/merge";

export const wistiaVideoFieldFactory = (
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
        widgetId: "6StWOM1AZBDHDjynDkm1iz",
        widgetNamespace: "app",
      },
    } as Omit<ExpandedFieldDetails, "id" | "name">,
    props,
  );
