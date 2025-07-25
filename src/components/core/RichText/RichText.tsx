"use client";

import { ResultOf } from "gql.tada";
import { useMemo } from "react";
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
  useRichTextRenderOptions,
} from "./useRichTextRenderOptions";
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
  const options = useMemo(
    () => ({
      options: optionsProp,
      overrides: merge(variant ? variants[variant] : {}, overrides),
    }),
    [optionsProp, overrides, variant],
  );

  const renderOptions = useRichTextRenderOptions(
    content?.links,
    options,
    spansOnly,
  );

  const render = useMemo(
    () =>
      documentToReactComponents(
        content?.json as RichTextDocument,
        renderOptions,
      ),
    [content, renderOptions],
  );

  return render;
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
