"use client";

import { FragmentOf, readFragment } from "gql.tada";
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
import { RichTextFragment } from "@/lib/contentful/fragments/RichTextFragment";
import merge from "lodash/merge";

export const RichText = ({
  content: maskedContentFragment,
  options: optionsProp,
  overrides,
  spansOnly = false,
}: {
  content?: FragmentOf<typeof RichTextFragment> | null;
  options?: Options;
  overrides?: RichTextRenderOverrides;
  spansOnly?: boolean;
}) => {
  const content = readFragment(RichTextFragment, maskedContentFragment);

  const options = useMemo(
    () => ({
      options: optionsProp,
      overrides,
    }),
    [optionsProp, overrides],
  );

  const renderOptions = useRichTextRenderOptions(
    content?.richText?.links,
    options,
    spansOnly,
  );

  const render = useMemo(
    () =>
      documentToReactComponents(
        content?.richText?.json as RichTextDocument,
        renderOptions,
      ),
    [content, renderOptions],
  );

  return render;
};

const richTitleTextOverrides: RichTextRenderOverrides = {
  renderMark: {
    [MARKS.ITALIC]: (text) => (
      <em className="italic font-normal text-highlight">{text}</em>
    ),
  },
};

export const RichTitleText = ({
  content: maskedContentFragment,
  options: optionsProp,
  overrides,
  spansOnly = false,
}: {
  content?: FragmentOf<typeof RichTextFragment> | null;
  options?: Options;
  overrides?: RichTextRenderOverrides;
  spansOnly?: boolean;
}) => {
  const content = readFragment(RichTextFragment, maskedContentFragment);

  const options = useMemo(
    () => ({
      options: optionsProp,
      overrides: merge(richTitleTextOverrides, overrides),
    }),
    [optionsProp, overrides],
  );

  const renderOptions = useRichTextRenderOptions(
    content?.richText?.links,
    options,
    spansOnly,
  );

  return useMemo(
    () =>
      documentToReactComponents(
        content?.richText?.json as RichTextDocument,
        renderOptions,
      ),
    [content, renderOptions],
  );
};
