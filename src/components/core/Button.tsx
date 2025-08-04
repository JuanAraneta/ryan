import { focusStyle } from "@/utils/focusStyle";
import { reactNodeIsSingleElement } from "@/utils/reactNodeIsSingleElement";
import { cva, cx, type VariantProps } from "cva";
import { cloneElement, ComponentProps, ReactElement } from "react";

const buttonClasses = cva(
  ["transition-colors flex justify-center items-center gap-2", focusStyle],
  {
    variants: {
      variant: {
        primary: [
          "text-center border border-highlight text-button-primary-content rounded-full px-6 py-4 typo-button-cta w-fit font-bold inline-block bg-button-primary-bg",
          "hover:bg-button-primary-bg-hover hover:text-button-primary-content-hover",
          "active:bg-button-primary-bg-active active:border-button-primary-border-active active:text-button-primary-content-hover",
          "disabled:opacity-30 disabled:border-button-primary-border-disabled",
        ],
        secondary: [
          "text-center bg-button-secondary-bg border border-button-secondary-bg text-button-secondary-content rounded-full px-6 py-4 typo-button-cta w-fit font-bold inline-block",
          "hover:bg-brand-300 hover:border-brand-300 hover:text-white",
          "active:bg-button-secondary-bg-active active:border-button-secondary-bg-active  active:text-button-primary-content-hover",
          "disabled:opacity-30",
          "focus-visible:text-button-white focus-visible:bg-button-secondary-bg-focus focus-visible:border-button-secondary-border-focus",
        ],
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
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
        children: ReactElement;
      }
  )) => {
  if ("asChild" in props) {
    reactNodeIsSingleElement(props.children);
    const children = props.children as ReactElement<{ className?: string }>;
    return cloneElement(children, {
      className: cx(children?.props?.className, buttonClasses({ variant })),
    });
  } else {
    return (
      <button
        {...props}
        className={cx(props.className, buttonClasses({ variant }))}
      />
    );
  }
};
