import { ResultOf } from "gql.tada";
import { Section } from "@/components/core/Section";
import { ModuleInsightsBentoFragment } from "@/lib/contentful/fragments/ModuleInsightsBentoFragment";
import { RichText } from "@/components/core/RichText";

export const ModuleInsightsBento = ({
  data,
}: {
  data: ResultOf<typeof ModuleInsightsBentoFragment>;
}) => {
  console.log("🚀 ~ data:", data.headline);

  return (
    <Section
      data-testid="ModuleInsightsBento"
      className="dark px-0 pt-16 dsk:pt-32 border-2 border-amber-300"
    >
      <div className="flex flex-col justify-center items-center text-center">
        <h2 className="typo-display font-light">
          <RichText content={data.headline} variant="title" spansOnly />
        </h2>
      </div>
    </Section>
  );
};
