import { focusStyle } from "@/utils/focusStyle";
import { cva, cx, type VariantProps } from "cva";
import { Children, cloneElement, ComponentProps, JSX } from "react";

const iconButtonClasses = cva(
  [
    "cursor-pointer size-10 rounded-full flex items-center justify-center transition-colors border-2",
    focusStyle,
  ],
  {
    variants: {
      variant: {
        // TODO
        primary: [],
        secondary: [
          "border-icon-button-secondary-border text-content-primary",
          "hover:border-icon-button-secondary-bg-hover hover:bg-icon-button-secondary-bg-hover hover:text-icon-button-secondary-content-hover",
          "active:border-icon-button-secondary-bg-active active:bg-icon-button-secondary-bg-active active:text-icon-button-secondary-content-hover",
          "disabled:opacity-30",
        ],
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

type IconButtonVariantProps = VariantProps<typeof iconButtonClasses>;

export const IconButton = ({
  variant,
  ...props
}: IconButtonVariantProps &
  (
    | ComponentProps<"button">
    | {
        asChild: true;
        children: JSX.Element;
      }
  )) => {
  if ("asChild" in props) {
    if (Children.count(props.children) !== 1) {
      throw new Error(
        "IconButton with asChild prop must container exactly 1 child element."
      );
    }

    return cloneElement(
      // This is fine here; the type is very specific but the check above verifies the validity
      props.children as any,
      {
        className: cx(
          props.children.props?.className,
          iconButtonClasses({ variant })
        ),
      }
    );
  } else {
    return (
      <button
        {...props}
        className={cx(props.className, iconButtonClasses({ variant }))}
      />
    );
  }
};
