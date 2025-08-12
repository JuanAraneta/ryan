import { ComponentProps } from "react";
import { cx } from "cva";
import { FragmentOf, ResultOf, readFragment } from "gql.tada";
import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";

/**
 * Image component that works with Contentful assets using resultOf or fragmentOf patterns.
 *
 * @example
 * // Basic usage
 * <Image data={assetData} alt="Product image" />
 *
 * // With aspect ratio and custom styling
 * <Image
 *   data={assetData}
 *   aspectRatio="square"
 *   className="rounded-lg"
 *   objectFit="cover"
 * />
 *
 * // With custom aspect ratio
 * <Image data={assetData} aspectRatio={1.5} />
 */

type AspectRatio =
  | "square"
  | "video"
  | "portrait"
  | "landscape"
  | "wide"
  | "ultra-wide"
  | number; // Custom aspect ratio as number (e.g., 1.5 for 3:2)

interface ImageProps extends Omit<ComponentProps<"img">, "src" | "alt"> {
  source?:
    | ResultOf<typeof AssetFragment>
    | FragmentOf<typeof AssetFragment>
    | null;
  aspectRatio?: AspectRatio;
  alt?: string; // Optional override for alt text
  className?: string;
  imgClassName?: string;
  objectFit?: "cover" | "contain" | "fill" | "scale-down" | "none";
}

const aspectRatioMap: Record<Exclude<AspectRatio, number>, string> = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
  "ultra-wide": "aspect-[21/9]",
};

const objectFitMap = {
  cover: "object-cover",
  contain: "object-contain",
  fill: "object-fill",
  "scale-down": "object-scale-down",
  none: "object-none",
};

export function Image({
  source,
  aspectRatio,
  alt,
  className,
  imgClassName,
  objectFit = "cover",
  ...props
}: ImageProps) {
  const asset = readFragment(AssetFragment, source);

  const aspectRatioClass = aspectRatio
    ? typeof aspectRatio === "number"
      ? `aspect-[${aspectRatio}]`
      : aspectRatioMap[aspectRatio]
    : undefined;

  const altText = alt ?? asset?.description ?? "";

  return (
    <div className={cx("overflow-hidden", aspectRatioClass, className)}>
      {asset?.url ? (
        <img
          src={asset.url}
          alt={altText}
          className={cx(
            "w-full h-full object-center",
            objectFitMap[objectFit],
            imgClassName,
          )}
          {...props}
        />
      ) : (
        <svg
          viewBox="0 0 120 120"
          className="w-full h-full fill-neutral-200/50 bg-neutral-100"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M33.3 38.4816C33.2603 37.0472 34.4199 35.8864 35.8543 35.875H83.1463C84.5848 35.875 85.7503 37.0431 85.7503 38.4816V80.5184C85.7403 81.9528 84.5807 83.1136 83.1463 83.125H35.8543C34.4158 83.1236 33.2503 81.957 33.2503 80.5184V38.4816ZM80.5006 41.1251H38.5006V77.8751L62.8921 53.4783C63.9172 52.4536 65.5788 52.4536 66.6039 53.4783L80.5006 67.4013V41.1251ZM43.75 51.6249C43.75 54.5244 46.1005 56.8749 49 56.8749C51.8995 56.8749 54.25 54.5244 54.25 51.6249C54.25 48.7254 51.8995 46.3749 49 46.3749C46.1005 46.3749 43.75 48.7254 43.75 51.6249Z"
          />
        </svg>
      )}
    </div>
  );
}
