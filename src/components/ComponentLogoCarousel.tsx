import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";
import { ComponentLogoCarouselFragment } from "@/lib/contentful/fragments/ComponentLogoCarouselFragment";
import { cx } from "cva";
import { FragmentOf, readFragment, ResultOf } from "gql.tada";
import { ComponentProps } from "react";
import { getInspector } from "@/utils/inspectorMode";

export const ComponentLogoCarousel = ({
  data,
  repetitions = 3,
  ...props
}: {
  data:
    | ResultOf<typeof ComponentLogoCarouselFragment>
    | FragmentOf<typeof ComponentLogoCarouselFragment>
    | null
    | undefined;
  repetitions?: number;
} & ComponentProps<"div">) => {
  const logos = readFragment(ComponentLogoCarouselFragment, data)
    ?.logosCollection?.items;

  if (!logos || logos.length === 0) return null;

  const logoCarouselData = readFragment(ComponentLogoCarouselFragment, data);

  if (!logoCarouselData) return null;

  const inspector = getInspector(logoCarouselData);

  return (
    <div
      {...props}
      className={cx(
        "overflow-hidden [mask-image:var(--horizontal-fade-linear-gradient-mask)] w-full",
        props.className,
      )}
      {...inspector("logosCollection")}
    >
      <div
        className="flex items-center flex-1 animate-carousel w-fit"
        style={{ "--carousel-repetitions": repetitions }}
      >
        {Array.from({ length: repetitions }).map((_, index) => (
          <ul
            key={index}
            aria-hidden={index !== 0}
            className="flex items-center gap-6 dsk:gap-16 px-3 dsk:px-8"
          >
            {logos.map((item) => {
              const logo = readFragment(AssetFragment, item);
              return (
                logo?.url && (
                  <img
                    key={logo.url}
                    src={logo.url}
                    alt={logo.description ?? ""}
                    className="max-w-24 max-h-16 dsk:max-w-36 dsk:max-h-24 grayscale opacity-75 brightness-[1000%] contrast-50"
                  />
                )
              );
            })}
          </ul>
        ))}
      </div>
    </div>
  );
};
