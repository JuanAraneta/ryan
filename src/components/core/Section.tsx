import { reactNodeIsSingleElement } from "@/utils/reactNodeIsSingleElement";
import { cx } from "cva";
import { Children, cloneElement, ComponentProps, JSX } from "react";

export const Section = ({
  ...props
}:
  | ComponentProps<"section">
  | {
      asChild: true;
      children: JSX.Element;
    }) => {
  const sectionClasses =
    "max-w-hd [--x-section-padding:24px] dsk:[--x-section-padding:80px] px-(--x-section-padding) mx-auto";
  if ("asChild" in props) {
    reactNodeIsSingleElement(props.children);
    return cloneElement(
      // These are fine here; the type is very specific but the check above verifies the validity
      props.children as any,
      {
        className: cx(
          (props.children?.props as any)?.className,
          sectionClasses
        ),
      }
    );
  } else {
    return (
      <section {...props} className={cx(props.className, sectionClasses)} />
    );
  }
};
