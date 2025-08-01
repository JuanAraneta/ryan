import { Button } from "@/components/core/Button";
import { Link } from "@/components/core/Link";
import { RichText } from "@/components/core/RichText";
import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";
import { ComponentCardDeviceMockFragment } from "@/modules/ModuleChapterGroup/fragments/CardDeviceMockFragment";
import { backgroundDescriptionMapToClass } from "@/utils/backgroundDescriptionMapToClass";
import { cx } from "cva";
import { readFragment, ResultOf } from "gql.tada";
import { useId } from "react";

export const ComponentCardDeviceMock = ({
  data,
}: {
  data: ResultOf<typeof ComponentCardDeviceMockFragment>;
}) => {
  const h2Id = useId();
  return (
    <div
      className={cx(
        "dark rounded-2xl w-full px-6 py-10 dsk:p-10 flex flex-col dsk:flex-row items-center justify-center gap-8 dsk:gap-20",
        backgroundDescriptionMapToClass.resolveClass(data.moduleBackground),
      )}
    >
      <div className="dsk:w-1/2">
        <h2 className="typo-heading-2 font-light" id={h2Id}>
          {data.title}
        </h2>
        <p className="typo-body-large pt-6 dsk:pt-8 text-neutral-100">
          <RichText content={data.richTextBody} spansOnly />
        </p>
        <div className="pt-8 dsk:pt-14">
          <Button asChild variant="secondary" aria-describedby={h2Id}>
            <Link link={data.callToAction} className="max-dsk:w-full" />
          </Button>
        </div>
      </div>
      <div className="dsk:w-1/2 flex items-center justify-center">
        <img
          alt={data.title ?? "Device mock"}
          src={readFragment(AssetFragment, data.deviceMock)?.url ?? ""}
          className="max-h-80"
        />
      </div>
    </div>
  );
};
