"use client";

import { Section } from "@/components/core/Section";
import { GetModuleChapterGroupById } from "@/lib/contentful/query/GetModuleChapterGroupById";
import { cx } from "cva";
import { readFragment, ResultOf } from "gql.tada";
import kebabCase from "lodash/kebabCase";
import { default as NextLink } from "next/link";
import { useEffect, useRef, useState } from "react";
import { ComponentCardDeviceMock } from "./components/ComponentCardDeviceMock";
import { ComponentCardDeviceMockFragment } from "@/lib/contentful/query/GetModuleChapterGroupById/fragments/CardDeviceMockFragment";
import { ComponentCategorySolutionsHeadline } from "./components/ComponentCategorySolutionsHeadline";
import { ComponentCategorySolutionsHeadlineFragment } from "@/lib/contentful/query/GetModuleChapterGroupById/fragments/ComponentCategorySolutionsHeadlineFragment";
import { ComponentCategorySolutions2ColSubBody } from "./components/ComponentCategorySolutions2ColSubBody";
import { ComponentCategorySolutions2ColSubBodyFragment } from "@/lib/contentful/query/GetModuleChapterGroupById/fragments/ComponentCategorySolutions2ColSubBodyFragment";
import { CategorySolutionsImageLinkGrid } from "./components/CategorySolutionsImageLinkGrid";
import { CategorySolutionsImageLinkGridFragment } from "@/lib/contentful/query/GetModuleChapterGroupById/fragments/CategorySolutionsImageLinkGridFragment";

export const ModuleChapterGroup = ({
  data,
}: {
  data: ResultOf<typeof GetModuleChapterGroupById>;
}) => {
  const [inViewSectionIndex, setInViewSectionIndex] = useState(0);
  const navMarkerRef = useRef<HTMLDivElement>(null);
  const navItemsContainerRef = useRef<HTMLElement>(null);
  const contentItemsContainerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const navMarker = navMarkerRef.current,
      navItemsContainer = navItemsContainerRef.current,
      contentItemsContainer = contentItemsContainerRef.current;

    if (!navMarker || !navItemsContainer || !contentItemsContainer) return;

    let selectedIndex = inViewSectionIndex;

    const init = () => {
      const element = navItemsContainer.children[selectedIndex];
      if (!(element instanceof HTMLElement)) return;
      navMarker.style.height = `${element.clientHeight}px`;
      navMarker.style.transform = `translateY(${element.offsetTop}px)`;
    };
    init();

    const controller = new AbortController();
    window.addEventListener("resize", init, { signal: controller.signal });
    window.addEventListener(
      "scroll",
      () => {
        const bottoms = [...contentItemsContainer.children].map(
          (link) => link.getBoundingClientRect().bottom
        );
        const lastIndexWhoseBottomIsAboveHalfWindow = bottoms.findIndex(
          (bottom) => bottom > window.innerHeight / 2
        );
        if (selectedIndex === lastIndexWhoseBottomIsAboveHalfWindow) return;
        setInViewSectionIndex(lastIndexWhoseBottomIsAboveHalfWindow);
        selectedIndex = lastIndexWhoseBottomIsAboveHalfWindow;
        init();
      },
      { signal: controller.signal }
    );

    return () => controller.abort();
  }, []);

  return (
    <Section className="py-32 flex gap-14">
      <div className="sticky top-10 h-min">
        <div
          ref={navMarkerRef}
          className="absolute left-0 top-0 bg-new-gold w-1 transition-transform"
        />
        <nav ref={navItemsContainerRef} className="flex flex-col gap-8">
          {data.moduleChapterGroup?.chaptersCollection?.items
            .filter(Boolean)
            .map((chapter, index) => {
              const current = index === inViewSectionIndex;

              return (
                <NextLink
                  key={index}
                  href={`#${kebabCase(chapter.title ?? "")}`}
                  className="group flex flex-col gap-2 pl-8"
                  {...(current && { "aria-current": current })}
                >
                  <span
                    className="block font-bold typo-heading-6 text-neutral-600 transition-colors group-aria-[current]:text-brand-500"
                    aria-hidden
                  >{`${index < 9 ? 0 : ""}${index + 1}`}</span>
                  <span
                    className={cx(
                      "block typo-heading-5 transition-colors text-neutral-600 group-aria-[current]:text-neutral-900 whitespace-nowrap"
                    )}
                  >
                    {chapter.title ?? ""}
                  </span>
                </NextLink>
              );
            })}
        </nav>
      </div>
      <ul className="grow" ref={contentItemsContainerRef}>
        {data.moduleChapterGroup?.chaptersCollection?.items
          .filter(Boolean)
          .map((chapter, index) => (
            <li
              key={index}
              id={kebabCase(chapter.title ?? "")}
              className="flex flex-col gap-8 dsk:gap-16 w-full not-last:pb-10 not-first:pt-10 dsk:not-last:pb-20 dsk:not-first:pt-20 not-first:border-t border-border-primary"
            >
              {chapter.contentsCollection?.items.map((item, index) => {
                switch (item?.__typename) {
                  case "ComponentCardDeviceMock":
                    return (
                      <ComponentCardDeviceMock
                        key={index}
                        data={readFragment(
                          ComponentCardDeviceMockFragment,
                          item
                        )}
                      />
                    );
                  case "ComponentCategorySolutionsHeadline":
                    return (
                      <ComponentCategorySolutionsHeadline
                        key={index}
                        data={readFragment(
                          ComponentCategorySolutionsHeadlineFragment,
                          item
                        )}
                      />
                    );
                  case "ComponentCategorySolutions2ColSubBody":
                    return (
                      <ComponentCategorySolutions2ColSubBody
                        key={index}
                        data={readFragment(
                          ComponentCategorySolutions2ColSubBodyFragment,
                          item
                        )}
                      />
                    );
                  case "CategorySolutionsImageLinkGrid":
                    return (
                      <CategorySolutionsImageLinkGrid
                        key={index}
                        data={readFragment(
                          CategorySolutionsImageLinkGridFragment,
                          item
                        )}
                      />
                    );
                  default:
                    return null;
                }
              })}
            </li>
          ))}
      </ul>
    </Section>
  );
};
