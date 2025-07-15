"use client";

import { ComponentLinkFragment } from "@/lib/contentful/fragments/ComponentLinkFragment";
import { ResultOf, FragmentOf } from "gql.tada";
import { ComponentProps, forwardRef, useMemo } from "react";
import { default as NextLink } from "next/link";

type LinkProps = { noLocalePrefix?: boolean } & (
  | (ComponentProps<"a"> & { href: string; link?: never })
  | (ComponentProps<"a"> & {
      link:
        | ResultOf<typeof ComponentLinkFragment>
        | FragmentOf<typeof ComponentLinkFragment>
        | null
        | undefined;
      href?: never;
    })
);

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      link: linkProp,
      href: hrefProp,
      children: childrenProp,
      noLocalePrefix = false,
      ...props
    },
    ref
  ) => {
    const link = linkProp as ResultOf<typeof ComponentLinkFragment>;
    const href = useMemo(() => {
      if (hrefProp) {
        return hrefProp;
      } else if (link?.internalSource?.slug) {
        return `/${link.internalSource.slug}`;
      } else return link?.externalSource ?? "#";
    }, [hrefProp, link]);

    const isInternal = useMemo(() => {
      return href.startsWith("/");
    }, [href]);

    const children = childrenProp ?? link?.label;

    if (isInternal) {
      return (
        <NextLink {...props} href={href} ref={ref}>
          {children}
        </NextLink>
      );
    } else {
      return (
        <a
          {...props}
          href={href}
          ref={ref}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
  }
);
