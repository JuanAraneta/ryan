import { getInspector } from "@/utils/inspectorMode";
import { readFragment, ResultOf } from "gql.tada";
import { ComponentCustomerStoryCardFragment } from "./ComponentCustomerStoryCardFragment";
import { Link } from "@/components/core/Link";
import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";
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
      className="relative h-[300px] dsk:h-[350px] aspect-square dsk:aspect-[2/1] bg-cover bg-center gradient-overlay before:opacity-20 rounded-lg overflow-hidden px-10 py-12"
      style={{ backgroundImage: `url(${backgroundImage?.url})` }}
      {...inspector("link")}
    >
      {/* Client Logo */}
      {clientLogo?.url && (
        <img
          className="absolute top-6 left-6 h-8 max-w-[120px] object-contain"
          src={clientLogo.url}
          alt={clientLogo.description || "client logo"}
          {...inspector("clientLogo")}
        />
      )}
      {/* Content */}
      <div className="border-1 border-dim-blue gradient-container w-[23.25rem] h-full backdrop-blur-lg rounded-lg">
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
