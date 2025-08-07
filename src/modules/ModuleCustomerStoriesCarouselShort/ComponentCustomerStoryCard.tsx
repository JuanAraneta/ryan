import { cx } from "cva";
import { getInspector } from "@/utils/inspectorMode";
import { readFragment, ResultOf } from "gql.tada";
import { ComponentCustomerStoryCardFragment } from "./ComponentCustomerStoryCardFragment";
import { Link } from "@/components/core/Link";
import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";
import { focusStyle } from "@/utils/focusStyle";
import { Statistics } from "@/components/core/Statistics";

export const ComponentCustomerStoryCard = ({
  data,
}: {
  data: ResultOf<typeof ComponentCustomerStoryCardFragment>;
}) => {
  const inspector = getInspector(data);

  const backgroundImage = readFragment(AssetFragment, data.backgroundImage);
  const clientLogo = readFragment(AssetFragment, data.clientLogo);

  return (
    <Link
      link={data.link}
      className={cx(
        "group block h-[300px] dsk:h-[350px] aspect-square dsk:aspect-[2/1] mob:aspect-square relative rounded-lg overflow-hidden",
        "transition-transform duration-300 hover:scale-105",
        focusStyle,
      )}
      {...inspector("link")}
    >
      {/* Background Image */}
      {backgroundImage?.url && (
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={backgroundImage.url}
          alt=""
          {...inspector("backgroundImage")}
        />
      )}

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Client Logo */}
      {clientLogo?.url && (
        <img
          className="absolute top-6 left-6 h-8 max-w-[120px] object-contain"
          src={clientLogo.url}
          alt=""
          {...inspector("clientLogo")}
        />
      )}

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        {/* Statistics */}
        <div className="mb-4" {...inspector("statistic")}>
          {data.statistic && <Statistics data={data.statistic} />}
        </div>

        {/* Tags */}
        {data.tags && data.tags.length > 0 && (
          <div className="flex gap-2 flex-wrap" {...inspector("tags")}>
            {data.tags.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white/20 rounded-full typo-caption text-white/90"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};
