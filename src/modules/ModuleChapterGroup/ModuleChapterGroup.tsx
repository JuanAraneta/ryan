"use client";

import { Section } from "@/components/core/Section";
import { GetModuleChapterGroupById } from ".";
import { cx } from "cva";
import { readFragment, ResultOf } from "gql.tada";
import kebabCase from "lodash/kebabCase";
import { default as NextLink } from "next/link";
import { useEffect, useRef, useState } from "react";
import { ComponentCardDeviceMock } from "./components/ComponentCardDeviceMock";
import { ComponentCardDeviceMockFragment } from "@/modules/ModuleChapterGroup/fragments/CardDeviceMockFragment";
import { ComponentCategorySolutionsHeadline } from "./components/ComponentCategorySolutionsHeadline";
import { ComponentCategorySolutionsHeadlineFragment } from "@/modules/ModuleChapterGroup/fragments/ComponentCategorySolutionsHeadlineFragment";
import { ComponentCategorySolutions2ColSubBody } from "./components/ComponentCategorySolutions2ColSubBody";
import { ComponentCategorySolutions2ColSubBodyFragment } from "@/modules/ModuleChapterGroup/fragments/ComponentCategorySolutions2ColSubBodyFragment";
import { CategorySolutionsImageLinkGrid } from "./components/CategorySolutionsImageLinkGrid";
import { CategorySolutionsImageLinkGridFragment } from "@/modules/ModuleChapterGroup/fragments/CategorySolutionsImageLinkGridFragment";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { createIntersectionObserver } from "@/utils/createIntersectionObserver";

export const ModuleChapterGroup = ({
  data,
}: {
  data: ResultOf<typeof GetModuleChapterGroupById>;
}) => {
  const { isDesktop, isMobile } = useBreakpoint();
  const [mobileHeaderIsStuck, setMobileHeaderIsStuck] = useState(false);
  const [inViewSectionIndex, setInViewSectionIndex] = useState(0);
  const stickyContainerRef = useRef<HTMLDivElement>(null);
  const navMarkerRef = useRef<HTMLDivElement>(null);
  const navItemsContainerRef = useRef<HTMLElement>(null);
  const contentItemsContainerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const navMarker = navMarkerRef.current;
    const navItemsContainer = navItemsContainerRef.current;
    const contentItemsContainer = contentItemsContainerRef.current;
    const stickyContainer = stickyContainerRef.current;

    if (
      !navMarker ||
      !navItemsContainer ||
      !contentItemsContainer ||
      !stickyContainer
    )
      return;

    const controller = new AbortController();

    let selectedIndex = inViewSectionIndex;
    const setSelectedIndex = (value: number) => {
      setInViewSectionIndex(value);
      selectedIndex = value;
      setMarkerSizeAndTransform();
    };

    const setMarkerSizeAndTransform = (initial = false) => {
      const element = navItemsContainer.children[selectedIndex];
      if (!(element instanceof HTMLElement)) return;

      if (isDesktop) {
        navMarker.style.height = `${element.clientHeight}px`;
        navMarker.style.transform = `translateY(${element.offsetTop}px)`;
      } else {
        navMarker.style.width = `${element.clientWidth}px`;
        navMarker.style.transform = `translate(${element.offsetLeft}px, ${element.offsetTop + element.offsetHeight + 8}px)`;
        if (isMobile && !initial) {
          element.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest",
          });
        }
      }
    };

    if (isMobile) {
      createIntersectionObserver(
        ([e]) => setMobileHeaderIsStuck(e.intersectionRatio < 1),
        {
          threshold: [1],
          signal: controller.signal,
          observe: stickyContainer,
          cleanup: () => setMobileHeaderIsStuck(false),
        },
      );
    }

    setMarkerSizeAndTransform(true);

    window.addEventListener("resize", () => setMarkerSizeAndTransform(), {
      signal: controller.signal,
    });
    window.addEventListener(
      "scroll",
      () => {
        const bottoms = [...contentItemsContainer.children].map(
          (link) => link.getBoundingClientRect().bottom,
        );
        const lastIndexWhoseBottomIsAboveAThirdWindow = bottoms.findIndex(
          (bottom) => bottom > window.innerHeight / 3,
        );
        if (selectedIndex === lastIndexWhoseBottomIsAboveAThirdWindow) return;
        setSelectedIndex(lastIndexWhoseBottomIsAboveAThirdWindow);
      },
      { signal: controller.signal },
    );

    return () => controller.abort();
  }, [isDesktop, isMobile, inViewSectionIndex]);

  return (
    <Section
      data-testid="ModuleChapterGroup"
      className="dsk:py-32 pb-32 flex flex-col dsk:flex-row gap-14"
    >
      <div
        ref={stickyContainerRef}
        className={cx(
          "sticky transition-[background-color,box-shadow] top-[-1px] max-dsk:m-[1px] dsk:top-10 h-min max-dsk:-mx-(--x-section-padding) z-10 max-dsk:overflow-auto no-scrollbar",
          isMobile && mobileHeaderIsStuck
            ? "bg-white shadow-md"
            : "bg-transparent shadow-none",
        )}
      >
        <div
          ref={navMarkerRef}
          aria-hidden
          className={cx(
            "absolute left-0 top-0 dsk:!w-1 max-dsk:!h-0.5 transition-[transform,width,height]",
            // The gradient classes aren't actually Tailwind utilities because they are used dynamically
            // So we can't use Tailwind variant prefixes on them, e.g. dsk: or max-dsk:
            isDesktop ? "bg-new-gold" : "gradient-gold-h-dark-to-light",
          )}
        />
        <nav
          ref={navItemsContainerRef}
          className="flex flex-row dsk:flex-col flex-1 w-max gap-8 max-dsk:py-8 max-dsk:px-(--x-section-padding)"
        >
          {data.moduleChapterGroup?.chaptersCollection?.items
            .filter(Boolean)
            .map((chapter, index) => {
              const current = index === inViewSectionIndex;

              return (
                <NextLink
                  key={index}
                  href={`#${kebabCase(chapter.title ?? "")}`}
                  className="group flex flex-col gap-2 dsk:pl-8"
                  {...(current && { "aria-current": current })}
                >
                  <span
                    className="hidden dsk:block font-bold typo-heading-6 text-neutral-600 transition-colors group-aria-[current]:text-brand-500"
                    aria-hidden
                  >{`${index < 9 ? 0 : ""}${index + 1}`}</span>
                  <span
                    className={cx(
                      "block dsk:typo-heading-5 transition-colors text-neutral-600 group-aria-[current]:text-neutral-900 whitespace-nowrap",
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
                          item,
                        )}
                      />
                    );
                  case "ComponentCategorySolutionsHeadline":
                    return (
                      <ComponentCategorySolutionsHeadline
                        key={index}
                        data={readFragment(
                          ComponentCategorySolutionsHeadlineFragment,
                          item,
                        )}
                      />
                    );
                  case "ComponentCategorySolutions2ColSubBody":
                    return (
                      <ComponentCategorySolutions2ColSubBody
                        key={index}
                        data={readFragment(
                          ComponentCategorySolutions2ColSubBodyFragment,
                          item,
                        )}
                      />
                    );
                  case "CategorySolutionsImageLinkGrid":
                    return (
                      <CategorySolutionsImageLinkGrid
                        key={index}
                        data={readFragment(
                          CategorySolutionsImageLinkGridFragment,
                          item,
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
