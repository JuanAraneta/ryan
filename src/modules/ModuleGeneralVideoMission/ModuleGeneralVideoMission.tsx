import { ResultOf } from "gql.tada";
import { GetModuleGeneralVideoMissionById } from ".";
import { Section } from "@/components/core/Section";
import { RichText } from "@/components/core/RichText";
import { getInspector } from "@/utils/inspectorMode";

export const ModuleGeneralVideoMission = ({
  data,
}: {
  data: ResultOf<typeof GetModuleGeneralVideoMissionById>;
}) => {
  if (!data.moduleGeneralVideoMission) return null;
  const inspector = getInspector(data.moduleGeneralVideoMission);

  const { headline, body } = data.moduleGeneralVideoMission;

  return (
    <Section
      data-testid="ModuleGeneralVideoMission"
      className="light py-17 dsk:py-31 flex flex-col dsk:flex-row justify-between gap-10 dsk:gap-20"
    >
      <div className="flex flex-col items-start w-4/5 dsk:w-1/3">
        <h2
          className="typo-heading-1 text-left text-brand-500 font-light"
          {...inspector("headline")}
          data-testid="ModuleGeneralVideoMissionHeadline"
        >
          {headline}
        </h2>
        <RichText content={body} spansOnly />
      </div>
      <div className="aspect-video w-full dsk:w-2/3 bg-brand-300">
      VIDEO SPACE {/* TODO: Add video player here */}
      </div>
    </Section>
  );
};
