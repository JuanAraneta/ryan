import type { ComponentProps } from "react";
import { cx } from "cva";

export interface ZoomImageProps extends ComponentProps<"img"> {
  className?: string;
  imgClassName?: string;
}

export function ZoomImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  ...props
}: ZoomImageProps) {
  return (
    <div className={cx("w-full overflow-hidden", className)}>
      <img
        src={src}
        alt={alt}
        className={cx(
          "w-full h-full object-cover object-center transition-transform hover:scale-105 focus-visible:scale-105",
          imgClassName,
        )}
        {...props}
      />
    </div>
  );
}
