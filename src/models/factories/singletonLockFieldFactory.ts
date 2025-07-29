import { ExpandedFieldDetails } from "../types/ExpandedFieldDetails";

export const singletonLockFieldFactory = (): ExpandedFieldDetails => ({
  id: "singletonLock",
  name: "Singleton lock",
  type: "Symbol",
  required: true,
  validations: [
    { unique: true },
    {
      in: ["singleton-lock"],
      message:
        "Do not modify this field. It is a technical stability requirement.",
    },
  ],
  editorInterface: {
    settings: {
      helpText:
        "Do not modify this field. It is only here to prevent the creation of new instances of this type as it should remain a singleton.",
    },
    widgetId: "singleLine",
    widgetNamespace: "builtin",
  },
});
