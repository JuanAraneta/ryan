import { readFragment, ResultOf } from "gql.tada";
import { PageSoftwareFragment } from "@/lib/contentful/fragments/PageSoftwareFragment";
import { RichText } from "@/components/core/RichText";
import { Image } from "@/components/core/Image";

export function SoftwareCard({
  data,
  variant: _variant = "tall", // TODO: add short variant
}: {
  data: ResultOf<typeof PageSoftwareFragment>;
  variant?: "tall" | "short";
}) {
  const softwareData = readFragment(PageSoftwareFragment, data);

  const { title, shortDescription, image } = softwareData;

  return (
    <div
      data-testid="SoftwareCard"
      className="bg-white border-1 border-neutral-200 rounded-lg w-[22.5rem] flex flex-col"
    >
      <div className="p-6">
        <p>{title}</p>
        <p>
          <RichText content={shortDescription} />
        </p>
      </div>

      <Image source={image} aspectRatio="square" alt={`${title} software`} />
    </div>
  );
}
