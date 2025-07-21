import { ReactNode, useMemo, JSX } from 'react';
import { Block, BLOCKS, Inline, INLINES } from '@contentful/rich-text-types';
import { ResultOf } from 'gql.tada';
import {
  Options,
  RenderMark,
  RenderNode,
} from '@contentful/rich-text-react-renderer';
import merge from 'lodash/merge';
import { DeepPartial } from '@/types/utils/DeepPartial';
import { Link } from '../Link';
import { AssetFragment } from '@/lib/contentful/fragments/AssetFragment';
import { ComponentLinkFragment } from '@/lib/contentful/fragments/ComponentLinkFragment';
import Image from 'next/image';

type RichTextEntry<T = object> = {
  sys: {
    id: string;
    __typename?: string;
  };
} & T;

export type RichTextLinks = {
  assets: {
    block: Array<RichTextEntry<{
      url: string | null;
      contentType: string | null;
    }> | null>;
  };
  entries: {
    inline: Array<RichTextEntry | null>;
    hyperlink: Array<RichTextEntry<{ slug?: string | null }> | null>;
    block: Array<RichTextEntry<{
      text: string;
      isExternal: boolean;
      url: string;
      pageReference: { __typename?: string; slug?: string | null };
    }> | null>;
  };
};

export const buildRichTextMaps = (
  links?: DeepPartial<RichTextLinks>
): RichTextMaps => {
  const assetMap = new Map();
  const entryMap = new Map();

  if (links) {
    links.assets?.block?.forEach(
      (asset) => asset && assetMap.set(asset.sys?.id, asset)
    );
    (['block', 'hyperlink', 'inline'] as const).forEach((key) => {
      links.entries?.[key]?.forEach(
        (entry) => entry && entryMap.set(entry.sys?.id, entry)
      );
    });
  }

  return { assetMap, entryMap };
};

type RichTextMaps = {
  assetMap: Map<unknown, unknown>;
  entryMap: Map<unknown, unknown>;
};

type Override = (
  node: Block | Inline,
  children: ReactNode,
  maps: RichTextMaps
) => JSX.Element | null;

export type RichTextRenderOverrides = {
  blocks?: {
    embeddedEntry?: {
      Link?: Override;
    };
  };
  renderNode?: RenderNode;
  renderMark?: RenderMark;
};

export const useRichTextRenderOptions = (
  links?: DeepPartial<RichTextLinks>,
  {
    options,
    overrides,
  }: {
    options?: Options;
    overrides?: RichTextRenderOverrides;
  } = {},
  spansOnly?: boolean
): Options =>
  useMemo(() => {
    const { assetMap, entryMap } = buildRichTextMaps(links);

    const mergedOptions = merge(
      {
        renderText: (text) =>
          text
            .split('\n')
            .flatMap((text, i) => [i > 0 && <br key={text} />, text]),
        renderNode: {
          [BLOCKS.HEADING_1]: (_, children) =>
            spansOnly ? (
              <span className="block">{children}</span>
            ) : (
              <h2 className="typo-heading-1 [*+&]:mt-9">{children}</h2>
            ),
          [BLOCKS.HEADING_2]: (_, children) =>
            spansOnly ? (
              <span className="block">{children}</span>
            ) : (
              <h2 className="typo-heading-2 [*+&]:mt-8">{children}</h2>
            ),
          [BLOCKS.HEADING_3]: (_, children) =>
            spansOnly ? (
              <span className="block">{children}</span>
            ) : (
              <h3 className="typo-heading-3 [*+&]:mt-6">{children}</h3>
            ),
          [BLOCKS.HEADING_4]: (_, children) =>
            spansOnly ? (
              <span className="block">{children}</span>
            ) : (
              <h4 className="typo-heading-4 [*+&]:mt-5">{children}</h4>
            ),
          [BLOCKS.HEADING_5]: (_, children) =>
            spansOnly ? (
              <span className="block">{children}</span>
            ) : (
              <h5 className="typo-heading-5 [*+&]:mt-4">{children}</h5>
            ),
          [BLOCKS.HEADING_6]: (_, children) =>
            spansOnly ? (
              <span className="block">{children}</span>
            ) : (
              <h6 className="typo-heading-6 [*+&]:mt-2">{children}</h6>
            ),
          [BLOCKS.PARAGRAPH]: (_, children) =>
            spansOnly ? (
              <span className="block">{children}</span>
            ) : (
              <p className="typo-body-base [*+&]:mt-5">{children}</p>
            ),
          [INLINES.HYPERLINK]: (node, children) => (
            <Link className="underline" href={node.data.uri}>
              {children}
            </Link>
          ),
          [INLINES.ENTRY_HYPERLINK]: (node, children) => {
            const embeddedEntry = entryMap.get(node?.data?.target?.sys?.id) as {
              __typename: 'Page';
              slug: string | null;
            } | null;

            if (embeddedEntry?.__typename !== 'Page') {
              console.error(
                `Non-page linked in INLINES.ENTRY_HYPERLINK, id: "${node?.data?.target?.sys?.id}"`
              );
              return null;
            } else
              return (
                <Link
                  link={{
                    internalSource: embeddedEntry,
                    label: null,
                    externalSource: null,
                  }}
                  className="underline"
                >
                  {children}
                </Link>
              );
          },
          [INLINES.EMBEDDED_ENTRY]: (node) => {
            interface LinkWithType
              extends ResultOf<typeof ComponentLinkFragment> {
              __typename: string;
            }

            const embeddedEntry = entryMap.get(
              node.data.target.sys.id
            ) as LinkWithType;

            if (embeddedEntry?.__typename === 'ComponentLink') {
              return <Link link={embeddedEntry} className="underline"></Link>;
            }
            return null;
          },
          [BLOCKS.LIST_ITEM]: (_, children) => <li>{children}</li>,
          [BLOCKS.OL_LIST]: (_, children) => (
            <ol className="[&>*]:list-decimal">{children}</ol>
          ),
          [BLOCKS.UL_LIST]: (_, children) => (
            <ol className="[&>*]:list-disc">{children}</ol>
          ),
          [BLOCKS.EMBEDDED_ASSET]: (node) => {
            const asset = assetMap.get(node.data.target.sys.id) as ResultOf<
              typeof AssetFragment
            >;
            return (
              <Image
                src={asset.url ?? ''}
                key={node.data.target.sys.id}
                alt="Embedded asset"
              />
            );
          },
          ...options?.renderNode,
        },
      } satisfies Options,
      options,
      overrides
    );

    return mergedOptions;
  }, [links, options, overrides, spansOnly]);
