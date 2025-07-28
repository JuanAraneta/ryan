import type { ContentModel } from "contentful-code-models";

export const componentInsight: ContentModel = {
  sys: {
    id: "componentInsight",
  },
  name: "Insight",
  description:
    "An individual insight article or piece of thought leadership content for Ryan.",
  displayField: "title",
  fields: [
    {
      id: "title",
      name: "Title",
      type: "Symbol",
      localized: false,
      required: true,
      validations: [
        {
          size: { min: 20, max: 120 },
        },
      ],
      disabled: false,
      omitted: false,
    },
    {
      id: "eyebrow",
      name: "Eyebrow",
      type: "Symbol",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
    },
    {
      id: "contentType",
      name: "Content type",
      type: "Symbol",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
    },
    {
      id: "image",
      name: "Image",
      type: "Link",
      localized: false,
      required: false,
      validations: [
        {
          linkMimetypeGroup: ["image"],
        },
      ],
      disabled: false,
      omitted: false,
      linkType: "Asset",
    },
    {
      id: "link",
      name: "Link",
      type: "Link",
      localized: false,
      required: false,
      validations: [
        {
          linkContentType: ["componentLink"],
        },
      ],
      disabled: false,
      omitted: false,
      linkType: "Entry",
    },
  ],
};
