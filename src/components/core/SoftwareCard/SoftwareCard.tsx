import { ResultOf } from "gql.tada";
import { PageContentSoftwareDetails } from "@/lib/contentful/fragments/PageContentSoftwareDetails";
import { Image } from "@/components/core/Image";
import { RichText } from "@/components/core/RichText";
import { routingUtils } from "@/lib/util/routingUtils";
import { Button } from "@/components/core/Button";
import { Link } from "@/components/core/Link";
import { Constant } from "@/components/providers/ConstantsContext";
import kebabCase from "lodash/kebabCase";

export async function SoftwareCard({
  data,
  variant: _variant = "tall", // TODO: add short variant
}: {
  data: ResultOf<typeof PageContentSoftwareDetails>;
  variant?: "tall" | "short";
}) {
  const subject = data.subject;
  const url = await routingUtils.getPathByContentEntry(data);

  const { title, image, shortDescription } = subject || {};

  const titleId = kebabCase(title || "");

  return (
    <div
      data-testid="SoftwareCard"
      className="bg-white border-1 border-neutral-200/50 rounded-lg w-[15rem] dsk:w-[22rem] flex flex-col h-full"
    >
      <div className="p-6 flex-1">
        <h5 id={titleId} className="typo-heading-5 mb-3">
          {title}
        </h5>
        <p className="typo-body-small text-content-secondary">
          <RichText content={shortDescription} spansOnly />
        </p>

        <Button asChild small>
          <Link className="mt-6" href={url} aria-labelledby={titleId}>
            <Constant name="exploreButtonLabel" />
          </Link>
        </Button>
      </div>

      <Image source={image} aspectRatio="square" alt={`${title} software`} />
    </div>
  );
}
