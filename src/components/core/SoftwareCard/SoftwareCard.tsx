import { readFragment, ResultOf } from "gql.tada";
import { PageContentSoftwareDetails } from "@/lib/contentful/fragments/PageContentSoftwareDetails";
import { RichText } from "@/components/core/RichText";
import { Image } from "@/components/core/Image";
import { getInspector } from "@/utils/inspectorMode";

export function SoftwareCard({
  data,
  variant: _variant = "tall", // TODO: add short variant
}: {
  data: ResultOf<typeof PageContentSoftwareDetails>;
  variant?: "tall" | "short";
}) {
  const softwareData = readFragment(PageContentSoftwareDetails, data);

  const { title, shortDescription, image, practiceArea } =
    softwareData.subject || {};

  const inspector = getInspector(data.subject!);

  return (
    <div
      data-testid="SoftwareCard"
      className="bg-white border-1 border-neutral-200/50 rounded-lg w-[15rem] dsk:w-[22rem] flex flex-col h-full"
    >
      <div className="p-6 flex-1">
        <h5 className="typo-heading-5 mb-3" {...inspector("title")}>
          {title}
        </h5>
        <p
          className="typo-body-small text-content-secondary"
          {...inspector("shortDescription")}
        >
          <RichText content={shortDescription} spansOnly />
        </p>

        {/*   {!!slug && (
          <Button asChild small>
            <Link className="mt-6" href={`/software/${slug}`}>
              <Constant name="exploreButtonLabel" />
            </Link>
          </Button>
        )} */}
      </div>

      <Image
        source={image}
        aspectRatio="square"
        alt={`${title} software`}
        {...inspector("image")}
      />
    </div>
  );
}
