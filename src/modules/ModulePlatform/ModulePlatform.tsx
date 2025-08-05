"use client";

import { readFragment, ResultOf } from "gql.tada";
import { RichText } from "@/components/core/RichText";
import { Section } from "@/components/core/Section";
import { GetModulePlatformById } from "@/modules/ModulePlatform/GetModulePlatformById";
import { Button } from "@/components/core/Button";
import { Link } from "@/components/core/Link";
import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";
import { IconTextWrap } from "@/components/core/IconTextWrap";
import { useContentfulPreview } from "@/hooks/useContentfulPreview";

export const ModulePlatform = ({
  data,
}: {
  data: ResultOf<typeof GetModulePlatformById>;
}) => {
  const { updatedData, inspector } = useContentfulPreview(data.modulePlatform);

  if (!updatedData) return null;

  const {
    headline,
    ctaButton,
    capabilityComponentsCollection,
    image,
    leftOverlayAsset,
    rightOverlayAsset,
  } = updatedData;

  const mainImage = readFragment(AssetFragment, image);
  const leftOverlay = readFragment(AssetFragment, leftOverlayAsset);
  const rightOverlay = readFragment(AssetFragment, rightOverlayAsset);

  return (
    <Section data-testid="ModulePlatform" className="dark pt-16 dsk:pt-24 px-0">
      <div className="flex flex-col items-center px-(--x-section-padding) mx-auto">
        <h2
          className="typo-heading-1 font-light text-center max-w-[49.25rem] mb-10"
          {...inspector("headline")}
        >
          <RichText content={headline} variant="title" spansOnly />
        </h2>

        <Button asChild {...inspector("ctaButton")}>
          <Link link={ctaButton} />
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-20 mb-32">
          {capabilityComponentsCollection?.items
            ?.filter(Boolean)
            .map((item, index) => (
              <IconTextWrap key={index} data={item} />
            ))}
        </div>
      </div>

      <div className="relative">
        {leftOverlay?.url && (
          <img
            src={leftOverlay.url}
            alt={leftOverlay.description ?? ""}
            className="absolute -top-12 left-6 object-contain object-top hidden dsk:block"
            {...inspector("leftOverlayAsset")}
          />
        )}
        {rightOverlay?.url && (
          <img
            src={rightOverlay.url}
            alt={rightOverlay.description ?? ""}
            className="absolute -top-12 right-6 object-contain object-top hidden dsk:block"
            {...inspector("rightOverlayAsset")}
          />
        )}
        {mainImage?.url && (
          <img
            src={mainImage.url}
            alt={mainImage.description ?? ""}
            className="w-full h-full object-cover aspect-video dsk:aspect-auto dsk:h-[22.5rem]"
            {...inspector("image")}
          />
        )}
      </div>
    </Section>
  );
};
