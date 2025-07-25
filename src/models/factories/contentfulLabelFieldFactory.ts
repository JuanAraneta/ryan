import { ExpandedFieldDetails } from "../types/ExpandedFieldDetails";

export const contentfulLabelFieldFactory = (): ExpandedFieldDetails => ({
  id: "contentfulLabel",
  name: "Contentful label",
  type: "Symbol",
  validations: [],
  editorInterface: {
    settings: {
      helpText: "A label for viewing on the Contentful UI.",
    },
    widgetId: "singleLine",
    widgetNamespace: "builtin",
  },
  displayField: true,
});
