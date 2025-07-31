import { reactNodeIsSingleElement } from "@/utils/reactNodeIsSingleElement";
import { cx } from "cva";
import { cloneElement, ComponentProps, ReactElement } from "react";

export const Section = ({
  ...props
}:
  | ComponentProps<"section">
  | {
      asChild: true;
      children: ReactElement;
    }) => {
  const sectionClasses =
    "max-w-hd [--x-section-padding:24px] dsk:[--x-section-padding:80px] px-(--x-section-padding) mx-auto";
  if ("asChild" in props) {
    reactNodeIsSingleElement(props.children);

    const children = props.children as ReactElement<{ className?: string }>;

    return cloneElement(children, {
      className: cx(children?.props?.className, sectionClasses),
    });
  } else {
    return (
      <section
        {...props}
        className={cx(props.className, sectionClasses)}
        style={{
          "--horizontal-fade-linear-gradient-mask":
            "linear-gradient(to right, transparent 0px, black var(--x-section-padding), black calc(100% - var(--x-section-padding)), transparent 100%)",
        }}
      />
    );
  }
};
