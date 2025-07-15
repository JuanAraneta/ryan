import { RefObject, useCallback } from "react";

export const useScrollJumpOnClickEventHandler = (
  scrollContainerRef: RefObject<Element | null>,
  direction: "prev" | "next",
  childrenQuerySelector?: string,
) =>
  useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const children = [
      ...(childrenQuerySelector
        ? container.querySelectorAll(childrenQuerySelector)
        : container.children),
    ].filter((child) => child instanceof HTMLElement);

    const scrollLeft =
      Number(
        getComputedStyle(container).scrollPaddingLeft.slice(0, -"px".length),
      ) + container.scrollLeft;

    const isAtMax =
      container.scrollLeft + container.clientWidth === container.scrollWidth;

    const currentChildIndex =
      isAtMax && direction === "next"
        ? children.length - 1
        : isAtMax && direction === "prev"
          ? children.findIndex((child) => child.offsetLeft > scrollLeft) - 1
          : children.findIndex((child) => child.offsetLeft === scrollLeft);

    const scrollTargetIndex = (() => {
      if (currentChildIndex === -1) return 0;
      else if (direction === "next")
        return currentChildIndex === children.length - 1
          ? 0
          : currentChildIndex + 1;
      else
        return currentChildIndex === 0
          ? children.length - 1
          : currentChildIndex - 1;
    })();

    const scrollTarget = children[scrollTargetIndex];

    container.scrollTo({ left: scrollTarget.offsetLeft, behavior: "smooth" });
  }, [direction]);
