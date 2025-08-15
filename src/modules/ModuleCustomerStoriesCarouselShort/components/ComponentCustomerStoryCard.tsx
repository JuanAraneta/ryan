import { getInspector } from "@/utils/inspectorMode";
import { readFragment, ResultOf } from "gql.tada";
import { ComponentCustomerStoryCardFragment } from "../fragments/ComponentCustomerStoryCardFragment";
import { Link } from "@/components/core/Link";
import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";
import { Statistics } from "@/components/core/Statistics";
import { Tag } from "@/components/core/Tag";
import { routingUtils } from "@/lib/util/routingUtils";

export const ComponentCustomerStoryCard = async ({
  data,
}: {
  data: ResultOf<typeof ComponentCustomerStoryCardFragment>;
}) => {
  const inspector = getInspector(data);

  const backgroundImage = readFragment(AssetFragment, data.backgroundImage);
  const clientLogo = readFragment(AssetFragment, data.clientLogo);
  const url = await routingUtils.getPathByContentEntry(data.pageContent);

  return (
    <Link
      href={url}
      className="relative h-[300px] dsk:h-[350px] aspect-square dsk:aspect-[2/1] bg-cover bg-center gradient-overlay before:opacity-20 rounded-lg overflow-hidden px-6 py-[3rem] dsk:px-10 dsk:py-12"
      style={{ backgroundImage: `url(${backgroundImage?.url})` }}
    >
      {/* Content */}
      <div className="border-1 border-dim-blue/60 gradient-container w-full dsk:w-[23.25rem] h-full backdrop-blur-lg rounded-lg p-6">
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
              animate={false}
              data={data.statistic}
              className="text-left"
              statisticClassName="typo-heading-1"
            />
          )}
        </div>

        {data.tags?.length && (
          <div
            className="hidden dsk:flex gap-2 flex-wrap"
            {...inspector("tags")}
          >
            {data.tags.filter(Boolean).map((tag, index) => (
              <Tag key={index} text={tag} />
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};
