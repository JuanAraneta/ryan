import { cx } from "cva";
import { ComponentInsightFragment } from "@/lib/contentful/fragments/ComponentInsightFragment";
import { readFragment, FragmentOf } from "gql.tada";
import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";
import { Tag } from "@/components/core/Tag";
import { Link } from "@/components/core/Link";

type CardProps = {
  data: FragmentOf<typeof ComponentInsightFragment>; // TODO: Add extra types when we define the articles, insights, etc.
  className?: string;
};

export const Card = ({ data, className }: CardProps) => {
  const { title, eyebrow, contentType, image, link } = readFragment(
    ComponentInsightFragment,
    data,
  );
  const imageUrl = readFragment(AssetFragment, image);

  return (
    <Link
      link={link}
      data-testid="Card"
      className={cx(
        "relative rounded-lg w-full h-full overflow-hidden group",
        className,
      )}
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
          <span className="typo-eyebrow">{eyebrow}</span>
        </p>
        <p className="mb-3">{title}</p>
        {contentType && <Tag text={contentType} />}
      </div>
    </Link>
  );
};
