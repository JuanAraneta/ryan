import { cx } from "cva";
import { PageContentNewsAndInsightsFragment } from "@/lib/contentful/fragments/PageContentNewsAndInsightsFragment";
import { readFragment, FragmentOf } from "gql.tada";
import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";
import { Link } from "@/components/core/Link";
import { getInspector } from "@/utils/inspectorMode";
import { routingUtils } from "@/lib/util/routingUtils";

type CardProps = {
  data: FragmentOf<typeof PageContentNewsAndInsightsFragment>; // TODO: Add extra types when we define the articles, insights, etc.
  className?: string;
};

export const NewsAndInsightsCard = async ({ data, className }: CardProps) => {
  const content = readFragment(PageContentNewsAndInsightsFragment, data);
  const subject = content.subject;
  const url = await routingUtils.getPathByContentEntry(content);
  if (!subject) return null;
  const inspector = getInspector(subject);

  const { title, eyebrow, image } = subject;

  const imageUrl = readFragment(AssetFragment, image);

  return (
    <Link
      href={url}
      data-testid="Card"
      className={cx(
        "relative rounded-lg w-full h-full overflow-hidden group",
        className,
      )}
      {...inspector("image")}
    >
      <img
        src={imageUrl?.url ?? ""}
        alt={title ?? ""}
        className={cx(
          "absolute inset-0 w-full h-full object-cover object-center transition-transform group-hover:scale-105 group-focus-visible:scale-105",
        )}
      />

      <div className="relative z-10 p-[1.3rem] gradient-overlay h-full">
        <p className="inline-flex mb-6 items-center gap-3">
          <span className="block rounded-full h-2 w-2 bg-brand-300" />
          <span className="typo-eyebrow" {...inspector("eyebrow")}>
            {eyebrow}
          </span>
        </p>
        <p className="typo-heading-5 mb-3" {...inspector("title")}>
          {title}
        </p>
      </div>
    </Link>
  );
};
