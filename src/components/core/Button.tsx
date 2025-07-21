import { focusStyle } from "@/utils/focusStyle";
import { cva, cx, type VariantProps } from "cva";
import { Children, cloneElement, ComponentProps, JSX } from "react";

const buttonClasses = cva(
  ["transition-colors flex justify-center items-center gap-2", focusStyle],
  {
    variants: {
      variant: {
        primary: [
          "border border-highlight light:text-highlight rounded-full px-6 py-4 typo-button-cta w-fit font-bold inline-block",
          "dark:hover:bg-white/15 light:hover:bg-brand-700 light:hover:text-white",
          "dark:active:bg-white/10 light:active:text-white light:active:bg-brand-800 light:active:border-brand-800",
          "disabled:opacity-30 dark:disabled:border-border-primary light:disabled:border-content-primary light:disabled:text-content-primary"
        ]
      }
    },
    defaultVariants: {
      variant: "primary"
    }
  }
);

type ButtonVariantProps = VariantProps<typeof buttonClasses>;

export const Button = ({
  variant,
  ...props
}: ButtonVariantProps &
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
        "Button with asChild prop must container exactly 1 child element."
      );
    }

    return cloneElement(
      // This is fine here; the type is very specific but the check above verifies the validity
      props.children as any,
      {
        className: cx(
          props.children.props?.className,
          buttonClasses({ variant })
        )
      }
    );
  } else {
    return (
      <button
        {...props}
        className={cx(props.className, buttonClasses({ variant }))}
      />
    );
  }
};
