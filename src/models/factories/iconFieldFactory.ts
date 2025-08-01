import { ExpandedFieldDetails } from "../types/ExpandedFieldDetails";
import merge from "lodash/merge";
import { Icons } from "@/components/icons";

export const iconFieldFactory = ({
  id = "icon",
  name = "Icon",
}: {
  id?: string;
  name?: string;
}): ExpandedFieldDetails =>
  merge({
    id,
    name,
    type: "Symbol",
    validations: [{ in: Object.keys(Icons) }],
    editorInterface: { widgetId: "dropdown", widgetNamespace: "builtin" },
  });
