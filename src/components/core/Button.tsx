import { focusStyle } from "@/utils/focusStyle";
import { cva, cx, type VariantProps } from "cva";
import { Children, cloneElement, ComponentProps, JSX } from "react";

const buttonClasses = cva(
  ["transition-colors flex justify-center items-center gap-2", focusStyle],
  {
    variants: {
      variant: {
        primary: [
          "border border-highlight text-button-primary-content rounded-full px-6 py-4 typo-button-cta w-fit font-bold inline-block",
          "hover:bg-button-primary-bg-hover hover:text-button-primary-content-hover",
          "active:bg-button-primary-bg-active active:border-button-primary-border-active active:text-button-primary-content-hover",
          "disabled:opacity-30 disabled:border-button-primary-border-disabled",
        ],
      },
    },
    defaultVariants: {
      variant: "primary",
    },
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
        ),
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
