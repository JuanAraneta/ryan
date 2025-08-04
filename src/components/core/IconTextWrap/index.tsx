import { readFragment, FragmentOf } from "gql.tada";
import { ComponentIconTextWrapFragment } from "@/lib/contentful/fragments/ComponentIconTextWrapFragment";
import { getIconByKey } from "@/components/icons";

export const IconTextWrap = ({
  data,
}: {
  data: FragmentOf<typeof ComponentIconTextWrapFragment>;
}) => {
  const { icon, title, body } = readFragment(
    ComponentIconTextWrapFragment,
    data,
  );

  const Icon = getIconByKey(icon);

  return (
    <div className="flex flex-col">
      <div className="min-h-16">
        {Icon && (
          <div className="text-new-gold border-2 rounded-full p-3 aspect-square w-fit flex items-center justify-center mb-3">
            <Icon className="w-4" />
          </div>
        )}
      </div>
      <h5 className="typo-heading-5 mb-2">{title}</h5>
      <p className="typo-body-small text-content-secondary">{body}</p>
    </div>
  );
};
