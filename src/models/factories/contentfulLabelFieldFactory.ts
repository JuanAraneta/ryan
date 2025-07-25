import { ExpandedFieldDetails } from "../types/ExpandedFieldDetails";

export const contentfulLabelFieldFactory = (): ExpandedFieldDetails => ({
  id: "contentfulLabel",
  name: "Contentful label",
  type: "Symbol",
  localized: false,
  required: false,
  validations: [],
  disabled: false,
  omitted: false,
  editorInterface: {
    settings: {
      helpText: "A label for viewing on the Contentful UI.",
    },
    widgetId: "singleLine",
    widgetNamespace: "builtin",
  },
  displayField: true,
});
