import { ComponentLinkFragment } from "@/lib/contentful/fragments/ComponentLinkFragment";
import { ResultOf, FragmentOf, readFragment } from "gql.tada";
import { ComponentProps } from "react";
import NextLink from "next/link";
import { routingUtils } from "@/lib/util/routingUtils";
import { getConstants } from "@/lib/contentful/utils/getConstants";
import { MarketFragment } from "@/lib/contentful/fragments/MarketFragment";

type LinkProps =
  | (ComponentProps<"a"> & { href: string; link?: never })
  | (ComponentProps<"a"> & {
      link:
        | ResultOf<typeof ComponentLinkFragment>
        | FragmentOf<typeof ComponentLinkFragment>
        | Pick<ResultOf<typeof ComponentLinkFragment>, "internalSource">
        | null
        | undefined;
      href?: never;
    });

export const Link = async ({
  link: linkProp,
  href: hrefProp,
  children: childrenProp,
  ...props
}: LinkProps) => {
  const constants = await getConstants();
  const defaultMarket = readFragment(MarketFragment, constants.defaultMarket);
  if (!defaultMarket) {
    throw new Error("Link: Failed to resolve defaultMarket in Constants");
  }
  const link = linkProp as ResultOf<typeof ComponentLinkFragment>;
  const href = (() => {
    if (hrefProp) {
      return hrefProp;
    }
    if (!link) {
      console.error("Null link prop provided to Link component!");
      return "#";
    }
    if (link.internalSource) {
      const source = link.internalSource;
      // Ensures starting slash after join
      const href = [""];

      // Market slug
      if (source?.market?.slug && source.market.slug !== defaultMarket.slug)
        href.push(source.market.slug);

      if (source.content && source.content.__typename !== "PageContentModular")
        href.push(
          routingUtils.pageContentTypeToSlug[source.content.__typename],
        );

      if (source.path && source.path !== "index") href.push(source.path);

      return href.join("/");
    } else return link?.externalSource ?? "#";
  })();

  const isInternal = href.startsWith("/");

  const children = childrenProp ?? link?.label;

  return isInternal ? (
    <NextLink {...props} href={href}>
      {children}
    </NextLink>
  ) : (
    <a {...props} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};
