import { FakeHorizontalScrollbar } from "@/components/core/FakeHorizontalScrollbar";
import { IconButton } from "@/components/core/IconButton";
import { useConstants } from "@/components/providers/ConstantsContext";
import { useRerenderOnScreenSize } from "@/hooks/useRerenderOnScreenSize";
import { useScrollJumpOnClickEventHandler } from "@/hooks/useScrollJumpOnClickEventHandler";
import { cx } from "cva";
import { ReactNode, useRef } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export const ScrollCarouselContainer = <ListItem,>({
  items,
  itemRender,
  className,
  hideControls,
}: {
  items: Array<ListItem>;
  itemRender: (props: {
    item: TSReset.NonFalsy<ListItem>;
    index: number;
  }) => ReactNode;
  className?: string;
  hideControls?: boolean;
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const prevClickHandler = useScrollJumpOnClickEventHandler(
    scrollContainerRef,
    "prev",
    "li",
  );
  const nextClickHandler = useScrollJumpOnClickEventHandler(
    scrollContainerRef,
    "next",
    "li",
  );
  const constants = useConstants();
  useRerenderOnScreenSize();

  return (
    <div>
      <div
        ref={scrollContainerRef}
        className={cx(
          "-mx-(--x-section-padding) px-(--x-section-padding) scroll-pl-(--x-section-padding) overflow-x-auto no-scrollbar pt-10 snap-start snap-x snap-mandatory [mask-image:var(--horizontal-fade-linear-gradient-mask)] relative",
          className,
        )}
      >
        <ul className="flex gap-6 flex-1 w-max">
          {items.filter(Boolean).map((item, index) => (
            <li
              key={index}
              className="flex flex-col gap-6 snap-start snap-always"
            >
              {itemRender({ item, index })}
            </li>
          ))}
        </ul>
      </div>
      {!hideControls && (
        <div
          className={cx(
            "pt-6 dsk:pt-10 gap-6 items-center",
            scrollContainerRef.current?.clientWidth ===
              scrollContainerRef.current?.scrollWidth
              ? "hidden"
              : "flex",
          )}
        >
          <div className="hidden dsk:flex gap-6">
            <IconButton
              variant="secondary"
              onClick={prevClickHandler}
              aria-label={constants.previousButtonAriaLabel ?? ""}
            >
              <MdChevronLeft size={24} />
            </IconButton>
            <IconButton
              variant="secondary"
              onClick={nextClickHandler}
              aria-label={constants.nextButtonAriaLabel ?? ""}
            >
              <MdChevronRight size={24} />
            </IconButton>
          </div>
          <FakeHorizontalScrollbar
            scrollContainerRef={scrollContainerRef}
            scrollSnapTo="start"
            itemQuerySelector="li"
          />
        </div>
      )}
    </div>
  );
};
