import type { ContentModel } from "contentful-code-models";
import { richTextFieldFactory } from "./factories/richTextFieldFactory";

export const moduleCustomerStoriesCarousel: ContentModel = {
  sys: {
    id: "moduleCustomerStoriesCarousel",
  },
  name: "Module / Customer stories carousel",
  description:
    "A module for the homepage giving a carousel of articles describing customer stories.",
  displayField: "contentfulLabel",
  fields: [
    {
      id: "contentfulLabel",
      name: "Contentful label",
      type: "Symbol",
      localized: false,
      required: false,
      validations: [],
      disabled: false,
      omitted: false,
    },
    richTextFieldFactory({ id: "richTextTitle", name: "Title" }),
    {
      id: "callToAction",
      name: "Call to action",
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
    {
      id: "customerStories",
      name: "Customer stories",
      type: "Array",
      localized: false,
      required: false,
      validations: [
        {
          size: {
            max: 10,
          },
        },
      ],
      disabled: false,
      omitted: false,
      items: {
        type: "Link",
        validations: [
          {
            linkContentType: ["componentCustomerStory"],
          },
        ],
        linkType: "Entry",
      },
    },
  ],
  editorInterface: {
    controls: [
      {
        fieldId: "contentfulLabel",
        widgetId: "singleLine",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "title",
        widgetId: "entryLinkEditor",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "callToAction",
        widgetId: "entryLinkEditor",
        widgetNamespace: "builtin",
      },
      {
        fieldId: "customerStories",
        widgetId: "entryLinksEditor",
        widgetNamespace: "builtin",
      },
    ],
  },
};
