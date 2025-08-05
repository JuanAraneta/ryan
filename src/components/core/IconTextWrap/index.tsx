"use client";

import { readFragment, FragmentOf } from "gql.tada";
import { ComponentIconTextWrapFragment } from "@/lib/contentful/fragments/ComponentIconTextWrapFragment";
import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";
import { ExternalSVGIcon } from "../ExternalSVGIcon";
import { useContentfulPreview } from "@/hooks/useContentfulPreview";

export const IconTextWrap = ({
  data,
}: {
  data: FragmentOf<typeof ComponentIconTextWrapFragment>;
}) => {
  const { updatedData, inspector } = useContentfulPreview(data);

  const { icon, title, body } = readFragment(
    ComponentIconTextWrapFragment,
    updatedData,
  );

  const iconData = readFragment(AssetFragment, icon);

  return (
    <div className="flex flex-col">
      <div className="min-h-16">
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
