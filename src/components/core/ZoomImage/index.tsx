import { type ImgHTMLAttributes } from "react";

export interface ZoomImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
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
    <div className={`w-full overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover object-center transition-transform group-hover:scale-105 hover:scale-105 ${imgClassName}`}
        {...props}
      />
    </div>
  );
}
