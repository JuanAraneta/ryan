import { getInspector } from "@/utils/inspectorMode";
import { readFragment, ResultOf } from "gql.tada";
import { ComponentCustomerStoryCardFragment } from "../fragments/ComponentCustomerStoryCardFragment";
import { Link } from "@/components/core/Link";
import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";
import { Statistics } from "@/components/core/Statistics";
import { Tag } from "@/components/core/Tag";

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
      {/* Content */}
      <div className="border-1 border-dim-blue/60 gradient-container w-[23.25rem] h-full backdrop-blur-lg rounded-lg p-6">
        {clientLogo?.url && (
          <img
            className="max-w-[120px] object-contain mb-10"
            src={clientLogo.url}
            alt={clientLogo.description || "client logo"}
            {...inspector("clientLogo")}
          />
        )}

        <div className="mb-6" {...inspector("statistic")}>
          {data.statistic && (
            <Statistics
              data={data.statistic}
              statisticClassName="typo-heading-1"
            />
          )}
        </div>

        {data.tags && data.tags.length > 0 && (
          <div className="flex gap-2 flex-wrap" {...inspector("tags")}>
            {data.tags.filter(Boolean).map((tag, index) => (
              <Tag key={index} text={tag} />
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};
