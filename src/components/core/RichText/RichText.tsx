import "server-only";
import { ResultOf } from "gql.tada";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import {
  MARKS,
  Document as RichTextDocument,
} from "@contentful/rich-text-types";
import {
  RichTextRenderOverrides,
  getRichTextRenderOptions,
} from "./getRichTextRenderOptions";
import { RichTextFragments } from "@/lib/contentful/fragments/RichTextFragments.generated";
import merge from "lodash/merge";

export const RichText = ({
  content,
  options: optionsProp,
  overrides,
  spansOnly = false,
  variant,
}: {
  content?: ResultOf<
    // Arbitrary non-specific fragment; they're all the same
    typeof RichTextFragments.ComponentCardDeviceMock_richTextBody
  > | null;
  options?: Options;
  overrides?: RichTextRenderOverrides;
  spansOnly?: boolean;
  variant?: keyof typeof variants;
}) => {
  const options = {
    options: optionsProp,
    overrides: merge(variant ? variants[variant] : {}, overrides),
  };

  const renderOptions = getRichTextRenderOptions(
    content?.links,
    options,
    spansOnly,
  );

  return documentToReactComponents(
    content?.json as RichTextDocument,
    renderOptions,
  );
};

const variants = {
  title: {
    renderMark: {
      [MARKS.ITALIC]: (text) => (
        <em className="italic font-normal text-highlight">{text}</em>
      ),
    },
  },
} satisfies Record<string, RichTextRenderOverrides>;
