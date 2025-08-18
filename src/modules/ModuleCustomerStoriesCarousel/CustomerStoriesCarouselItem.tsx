import { Link } from "@/components/core/Link";
import { RichText } from "@/components/core/RichText";
import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";
import { routingUtils } from "@/lib/util/routingUtils";
import { PageContentCustomerStoryFragment } from "@/modules/ModuleCustomerStoriesCarousel/PageContentCustomerStoryFragment";
import { focusStyle } from "@/utils/focusStyle";
import { getInspector } from "@/utils/inspectorMode";
import { cx } from "cva";
import { readFragment, ResultOf } from "gql.tada";

export const CustomerStoriesCarouselItem = async ({
  data,
}: {
  data: ResultOf<typeof PageContentCustomerStoryFragment>;
}) => {
  const story = data?.subject;
  const url = await routingUtils.getPathByContentEntry(data);
  if (!story) return null;
  const heroMedia = readFragment(AssetFragment, story.heroMedia);
  const customerLogo = readFragment(AssetFragment, story.customerLogo);
  const inspector = getInspector(story);

  return (
    <Link
      href={url}
      className={cx(
        "flex w-[700px] max-w-[calc(100vw-3rem)] flex-col snap-start snap-always rounded-lg overflow-hidden gradient-container group h-full",
        focusStyle,
      )}
    >
      <div className="relative w-full overflow-hidden">
        {heroMedia?.url && (
          <img
            className="h-[190px] dsk:h-[400px] w-full object-cover group-hover:scale-105 transition-transform"
            src={heroMedia.url}
            alt={`${story.customerName} hero media`}
            {...inspector("heroMedia")}
          />
        )}
        {!!customerLogo?.url && (
          <img
            className="absolute left-5 top-5 h-8"
            src={customerLogo?.url}
            alt={`${story.customerName} customer logo`}
            {...inspector("customerLogo")}
          />
        )}
      </div>
      <div className="p-6">
        <div className="flex gap-2.5 items-center">
          <div className="rounded-full size-2.5 bg-new-gold" />
          <p className="typo-eyebrow" {...inspector("customerName")}>
            {story.customerName}
          </p>
        </div>
        <p
          className="typo-heading-5 font-light mt-3"
          {...inspector("richTextHeadline")}
        >
          <RichText content={story.richTextHeadline} spansOnly />
        </p>
        {!!story.quoteSource && (
          <p className="typo-caption mt-3" {...inspector("quoteSource")}>
            {story.quoteSource}
          </p>
        )}
      </div>
    </Link>
  );
};
