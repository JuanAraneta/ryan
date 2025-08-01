import merge from "lodash/merge";
import { ExpandedFieldDetails } from "../types/ExpandedFieldDetails";
import { Icons } from "@/components/icons";

export const iconFieldFactory = ({
  id = "icon",
  name = "Icon",
  ...props
}: {
  id?: string;
  name?: string;
}): ExpandedFieldDetails =>
  merge(
    {
      id,
      name,
      type: "Symbol",
      validations: [{ in: Object.keys(Icons) }],
      editorInterface: {
        widgetId: "dropdown",
        widgetNamespace: "builtin",
        settings: {
          helpText: "Select an icon from the list",
        },
      },
    },
    props,
  );
