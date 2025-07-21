"use client";

import { RefObject, useEffect, useRef } from "react";
import { cx } from "cva";
import { useConstants } from "../providers/ConstantsContext";

export const FakeHorizontalScrollbar = ({
  scrollContainerRef,
  scrollSnapTo,
  itemQuerySelector,
  scrollBarClassName
}: {
  scrollContainerRef: RefObject<HTMLElement | null>;
  scrollSnapTo?: "start"; // others must be added manually
  itemQuerySelector?: string;
  scrollBarClassName?: string;
}) => {
  const constants = useConstants();
  const scrollThumbRef = useRef<HTMLButtonElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const scrollTrack = scrollTrackRef.current;
    const scrollThumb = scrollThumbRef.current;
    if (!scrollContainer || !scrollTrack || !scrollThumb) return;
    const getScrollContainerItems = () => [
      ...(itemQuerySelector
        ? scrollContainer.querySelectorAll(itemQuerySelector)
        : scrollContainer.children)
    ];

    const setScrollThumbState = () => {
      //size
      const scrollThumbSize =
        (scrollContainer.clientWidth / scrollContainer.scrollWidth) *
        scrollTrack.clientWidth;
      scrollThumb.style.width = `${scrollThumbSize}px`;

      // position
      const scrollContainerPercentage =
        scrollContainer.scrollLeft /
        (scrollContainer.scrollWidth - scrollContainer.clientWidth);
      const scrollThumbPosition =
        scrollContainerPercentage * (scrollTrack.clientWidth - scrollThumbSize);

      scrollThumb.style.transform = `translateX(${scrollThumbPosition}px)`;
    };

    setScrollThumbState();

    const createDragMoveHandler =
      (initialOffset: number) => (e: PointerEvent) => {
        scrollContainer.scrollTo({
          left:
            (initialOffset + e.clientX) *
            (scrollContainer.scrollWidth / scrollTrack.clientWidth)
        });
      };

    const handleDrag = (e: PointerEvent) => {
      const handleDragMove = createDragMoveHandler(
        parseInt(
          (scrollThumb.style.transform ?? "translateX(0px)").slice(
            "translateX(".length,
            0 - "px)".length
          )
        ) - e.clientX
      );
      if (scrollSnapTo) {
        scrollContainer.style.scrollSnapType = "none";
      }
      document.body.style.cursor = "grabbing";
      window.addEventListener("pointermove", handleDragMove);
      window.addEventListener(
        "pointerup",
        () => {
          window.removeEventListener("pointermove", handleDragMove);
          if (scrollSnapTo === "start") {
            const scrollItems = getScrollContainerItems();
            const containerLeftOffset =
              scrollContainer.getBoundingClientRect().left;
            const firstInViewIndex = scrollItems.findIndex(
              (item) =>
                item.getBoundingClientRect().right - containerLeftOffset > 0
            );
            const snapItemIndex =
              Math.abs(
                scrollItems[firstInViewIndex].getBoundingClientRect().left -
                  containerLeftOffset
              ) <
              Math.abs(
                scrollItems[firstInViewIndex + 1].getBoundingClientRect().left -
                  containerLeftOffset
              )
                ? firstInViewIndex
                : firstInViewIndex + 1;
            scrollItems[snapItemIndex].scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "start"
            });
          }
          if (scrollSnapTo) {
            setTimeout(() => (scrollContainer.style.scrollSnapType = ""), 500);
          }
          document.body.style.cursor = "auto";
        },
        { once: true }
      );
    };

    window.addEventListener("resize", setScrollThumbState);
    scrollContainer?.addEventListener("scroll", setScrollThumbState, {
      passive: true
    });
    scrollThumb?.addEventListener("pointerdown", handleDrag);

    return () => {
      window.removeEventListener("resize", setScrollThumbState);
      scrollContainer?.removeEventListener("scroll", setScrollThumbState);
      scrollThumb?.removeEventListener("pointerdown", handleDrag);
    };
  });

  return (
    <div className="relative h-1 w-full bg-neutral-0/10" ref={scrollTrackRef}>
      <button
        tabIndex={-1}
        className="absolute left-0 h-1 w-full cursor-pointer"
        onClick={(e) => {
          const { clientWidth } = e.currentTarget;
          const scrollRatio = e.nativeEvent.offsetX / clientWidth;
          scrollContainerRef.current?.scrollTo({
            left: scrollRatio * scrollContainerRef.current.scrollWidth,
            behavior: "smooth"
          });
        }}
        aria-label={constants.scrollbarTrackAriaLabel ?? ""}
      />
      <button
        tabIndex={-1}
        ref={scrollThumbRef}
        className={cx(
          "absolute h-[4px] max-w-full cursor-grab touch-pan-y bg-neutral-200/40 transition-[height,top] active:cursor-grabbing",
          scrollBarClassName
        )}
        style={{ userSelect: "none" }}
        aria-label={constants.scrollbarThumbLabel ?? ""}
      />
    </div>
  );
};
