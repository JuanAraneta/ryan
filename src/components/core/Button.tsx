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
