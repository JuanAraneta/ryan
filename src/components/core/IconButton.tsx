import { cx } from "cva";
import { ComponentProps } from "react";

// TODO - Work with design team to support dark & light themes
export const IconButton = (props: ComponentProps<"button">) => (
  <button
    {...props}
    className={cx(
      "size-10 rounded-full flex items-center justify-center border-2 border-border-primary cursor-pointer transition-colors hover:light",
      props.className
    )}
  />
);
