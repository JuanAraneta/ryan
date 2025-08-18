import { Link } from "@/components/core/Link";
import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";
import { routingUtils } from "@/lib/util/routingUtils";
import { PageContentExpertFragment } from "@/modules/ExpertsOverflow/fragments/PageContentExpertFragment";
import { focusStyle } from "@/utils/focusStyle";
import { getInspector } from "@/utils/inspectorMode";
import { cx } from "cva";
import { readFragment, ResultOf } from "gql.tada";
import { MdOutlineArrowForward } from "react-icons/md";

export const PageContentExpertCard = async ({
  data,
}: {
  data: ResultOf<typeof PageContentExpertFragment>;
}) => {
  const expert = data?.subject;
  const url = await routingUtils.getPathByContentEntry(data);
  if (!expert) return null;
  const headshot = readFragment(AssetFragment, expert?.headshot);
  const inspector = getInspector(expert);

  return (
    <Link href={url} className={cx(focusStyle, "group rounded-lg")}>
      {!!expert && !!headshot?.url && (
        <div
          className="w-[300px] h-[400px] rounded-lg overflow-hidden"
          {...inspector("headshot")}
        >
          <img
            className="size-full object-fill rounded-lg transition-transform group-hover:scale-105"
            src={headshot.url}
            alt={`${expert.fullName} headshot`}
          />
        </div>
      )}
      <span className="flex justify-between pt-6">
        <span className="block">
          <p className="typo-heading-4 font-light" {...inspector("fullName")}>
            {expert?.fullName}
          </p>
          <p
            className="typo-body-small font-bold text-content-secondary mt-3"
            {...inspector("title")}
          >
            {expert?.title}
          </p>
          <p
            className="typo-body-small font-bold text-content-secondary"
            {...inspector("serviceLabel")}
          >
            {expert?.serviceLabel}
          </p>
        </span>
        <MdOutlineArrowForward
          className="opacity-0 group-hover:opacity-100 transition-opacity"
          size={24}
        />
      </span>
    </Link>
  );
};
