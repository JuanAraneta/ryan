import { ExpandedContentModel } from "./types/ExpandedContentModel";
import { createField } from "./utils/createField";

export const componentLink = {
  sys: { id: "componentLink" },
  name: "Component / Link",
  description:
    "The standard type for representing links both internal to the application and to external URLs. Only fulfill either an external or internal source.",
  fields: [
    createField("shortText", {
      id: "label",
      name: "Label",
      displayField: true,
    }),
    createField("entryReference", {
      id: "internalSource",
      name: "Internal Source",
      linkContentType: ["page"],
    }),
    createField("shortText", {
      id: "externalSource",
      name: "External Source",
      validations: [
        {
          regexp: {
            pattern:
              "^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-/]))?$",
            //@ts-expect-error Package type error. This is valid.
            flags: null,
          },
        },
      ],
    }),
  ],
} as const satisfies ExpandedContentModel;
