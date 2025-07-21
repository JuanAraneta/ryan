import { focusStyle } from "@/utils/focusStyle";
import { cva, cx, type VariantProps } from "cva";
import { Children, cloneElement, ComponentProps, JSX } from "react";

const iconButtonClasses = cva(
  [
    "cursor-pointer size-10 rounded-full flex items-center justify-center transition-colors border-2",
    focusStyle
  ],
  {
    variants: {
      variant: {
        // TODO
        primary: [],
        secondary: [
          "light:border-content-primary dark:border-border-primary text-content-primary",
          "light:hover:border-brand-800 light:hover:bg-brand-800 light:hover:text-white dark:hover:border-new-gold dark:hover:bg-new-gold dark:hover:text-neutral-900",
          "light:active:border-brand-900 light:active:bg-brand-900 light:active:text-white dark:active:border-dark-gold dark:active:bg-dark-gold dark:active:text-neutral-900",
          "disabled:opacity-30"
        ]
      }
    },
    defaultVariants: {
      variant: "primary"
    }
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
      props.children as JSX.Element,
      {
        className: cx(
          props.children.props?.className,
          iconButtonClasses({ variant })
        )
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
