import { ResultOf, readFragment } from "gql.tada";
import { ZoomImage } from "@/components/core/ZoomImage";
import { ComponentRoutingItemFragment } from "@/lib/contentful/fragments/ComponentRoutingItemFragment";
import { ComponentLinkFragment } from "@/lib/contentful/fragments/ComponentLinkFragment";
import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";
import { MdKeyboardBackspace } from "react-icons/md";
import { getInspector } from "@/utils/inspectorMode";

export const HeroRoutingCard = ({
  data,
}: {
  data: ResultOf<typeof ComponentRoutingItemFragment>;
}) => {
  const { image, eyebrowText, heading, link } = data;
  const inspector = getInspector(data);

  const linkData = readFragment(ComponentLinkFragment, link);
  const imageData = readFragment(AssetFragment, image);
  const href = linkData?.internalSource?.slug || linkData?.externalSource || "";
  const alt = eyebrowText || heading || "";

  return (
    <a href={href} className="flex-1 group relative" {...inspector("link")}>
      {imageData?.url && (
        <ZoomImage
          src={imageData?.url}
          alt={alt}
          className="aspect-21/9 gradient-gold-h-dark-to-light"
        />
      )}
      <div className="flex-col py-6 px-10 gap-3 contents dsk:flex">
        <p className="flex items-center justify-between gap-2 absolute bottom-[1.12rem] dsk:static w-full px-4 dsk:px-0">
          <span className="typo-eyebrow">{eyebrowText}</span>
          <MdKeyboardBackspace className="w-6 h-6 rotate-180 dsk:group-hover:translate-x-2 transition-transform duration-100" />
        </p>

        <span className="typo-heading-4 font-light hidden dsk:block">
          {heading}
        </span>
      </div>
    </a>
  );
};
