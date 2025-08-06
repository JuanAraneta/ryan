import { readFragment, FragmentOf } from "gql.tada";
import { ComponentIconTextWrapFragment } from "@/lib/contentful/fragments/ComponentIconTextWrapFragment";
import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";
import { ExternalSVGIcon } from "../ExternalSVGIcon";
import { getInspector } from "@/utils/inspectorMode";

export const IconTextWrap = ({
  data,
}: {
  data: FragmentOf<typeof ComponentIconTextWrapFragment>;
}) => {
  const iconTextWrapData = readFragment(ComponentIconTextWrapFragment, data);
  const { icon, title, body } = iconTextWrapData;

  const inspector = getInspector(iconTextWrapData);

  const iconData = readFragment(AssetFragment, icon);

  return (
    <div className="flex flex-col">
      <div className="min-h-16 w-fit">
        {iconData?.url && (
          <div
            className="text-new-gold border-2 rounded-full p-3 aspect-square w-fit flex items-center justify-center mb-3"
            {...inspector("icon")}
          >
            <ExternalSVGIcon url={iconData.url} alt={`${title} icon`} />
          </div>
        )}
      </div>
      <h5 className="typo-heading-5 mb-2" {...inspector("title")}>
        {title}
      </h5>
      <p
        className="typo-body-small text-content-secondary"
        {...inspector("body")}
      >
        {body}
      </p>
    </div>
  );
};
