import { readFragment, ResultOf } from "gql.tada";
import { PageSoftwareFragment } from "@/lib/contentful/fragments/PageSoftwareFragment";
import { RichText } from "@/components/core/RichText";
import { Image } from "@/components/core/Image";
import { Button } from "@/components/core/Button";
import { Link } from "@/components/core/Link";
import { useConstants } from "@/components/providers/ConstantsContext";

export function SoftwareCard({
  data,
  variant: _variant = "tall", // TODO: add short variant
}: {
  data: ResultOf<typeof PageSoftwareFragment>;
  variant?: "tall" | "short";
}) {
  const { exploreButtonLabel } = useConstants();
  const softwareData = readFragment(PageSoftwareFragment, data);

  const { title, shortDescription, image, slug } = softwareData;

  return (
    <div
      data-testid="SoftwareCard"
      className="bg-white border-1 border-neutral-200/50 rounded-lg w-[15rem] dsk:w-[22rem] flex flex-col h-full"
    >
      <div className="p-6 flex-1">
        <h5 className="typo-heading-5 mb-3">{title}</h5>
        <p className="typo-body-small text-content-secondary">
          <RichText content={shortDescription} spansOnly />
        </p>

        {!!slug && (
          <Button asChild small>
            <Link className="mt-6" href={`/software/${slug}`}>
              {exploreButtonLabel}
            </Link>
          </Button>
        )}
      </div>

      <Image source={image} aspectRatio="square" alt={`${title} software`} />
    </div>
  );
}
