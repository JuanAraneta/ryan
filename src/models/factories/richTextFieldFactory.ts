import {
  ContentFields,
  ContentTypeFieldValidation,
  KeyValueMap,
} from "contentful-management";

export const richTextFieldFactory = ({
  name,
  id,
  enabledMarks = {
    enabledMarks: [
      "bold",
      "italic",
      "underline",
      "code",
      "superscript",
      "subscript",
      "strikethrough",
    ],
    message:
      "Only bold, italic, underline, code, superscript, subscript, and strikethrough marks are allowed",
  },
  enabledNodeTypes = {
    enabledNodeTypes: [
      "ordered-list",
      "unordered-list",
      "hr",
      "blockquote",
      "entry-hyperlink",
      "hyperlink",
    ],
    message:
      "Only ordered list, unordered list, horizontal rule, quote, link to entry, and link to Url nodes are allowed",
  },
  nodes = {
    nodes: {
      "entry-hyperlink": [{ size: { max: 10 } }, { linkContentType: ["page"] }],
    },
  },
}: {
  name: string;
  id: string;
  enabledMarks?: {
    enabledMarks: Array<string>;
    message: string;
  };
  enabledNodeTypes?: {
    enabledNodeTypes: ContentTypeFieldValidation["enabledNodeTypes"];
    message: string;
  };
  nodes?: {
    nodes: ContentTypeFieldValidation["nodes"];
  };
}): ContentFields<KeyValueMap> => ({
  id,
  name,
  type: "RichText",
  localized: false,
  required: false,
  validations: [enabledMarks, enabledNodeTypes, nodes],
  disabled: false,
  omitted: false,
});
