import { ExpandedFieldDetails } from "../types/ExpandedFieldDetails";
import merge from "lodash/merge";
import { backgroundDescriptionMapToClass } from "@/utils/backgroundDescriptionMapToClass";

export const moduleBackgroundFieldFactory = ({
  id = "moduleBackground",
  name = "Module Background",
  variant,
}: {
  id?: string;
  name?: string;
  variant: keyof typeof backgroundDescriptionMapToClass;
}): ExpandedFieldDetails =>
  merge({
    id,
    name,
    type: "Symbol",
    validations: [
      {
        in: Object.keys(backgroundDescriptionMapToClass[variant]),
      },
    ],
    editorInterface: { widgetId: "dropdown", widgetNamespace: "builtin" },
  });
