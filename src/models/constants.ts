import { contentfulLabelFieldFactory } from "./factories/contentfulLabelFieldFactory";
import { singletonLockFieldFactory } from "./factories/singletonLockFieldFactory";
import { ExpandedContentModel } from "./types/ExpandedContentModel";

export const constants: ExpandedContentModel = {
  sys: {
    id: "constants",
  },
  name: "Constants",
  description:
    "All constant strings that get used in multiple places throughout the application.",
  fields: [
    contentfulLabelFieldFactory(),
    {
      id: "previousButtonAriaLabel",
      name: "Previous button ARIA label",
      type: "Symbol",
      validations: [],
      editorInterface: {
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
    },
    {
      id: "nextButtonAriaLabel",
      name: "Next button ARIA label",
      type: "Symbol",
      validations: [],
      editorInterface: {
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
    },
    {
      id: "scrollbarThumbLabel",
      name: "Scrollbar thumb ARIA label",
      type: "Symbol",
      validations: [],
      editorInterface: {
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
    },
    {
      id: "scrollbarTrackAriaLabel",
      name: "Scrollbar track ARIA label",
      type: "Symbol",
      validations: [],
      editorInterface: {
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
    },
    singletonLockFieldFactory(),
  ],
};
