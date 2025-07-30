import { ResultOf } from "gql.tada";
import { Section } from "@/components/core/Section";
import { ModuleInsightsBentoFragment } from "@/lib/contentful/fragments/ModuleInsightsBentoFragment";
import { RichText } from "@/components/core/RichText";
import { Button } from "@/components/core/Button";

export const ModuleInsightsBento = ({
  data,
}: {
  data: ResultOf<typeof ModuleInsightsBentoFragment>;
}) => {
  console.log("🚀 ~ data:", data);

  return (
    <Section data-testid="ModuleInsightsBento" className="dark py-16 dsk:py-32">
      <div className="flex flex-col justify-center items-center text-center">
        <h2 className="typo-display font-light">
          <RichText content={data.headline} variant="title" spansOnly />
        </h2>

        <div className="grid grid-cols-3 gap-4 w-full min-h-[25rem] px-">
          <div className="aspect-square flex flex-col gap-6 items-left">
            <h6 className="typo-heading-6">insights</h6>
            <h4 className="typo-heading-4">
              Dive into the tax industry’s shifting paradigms and stay ahead
              with expert-led resources.b
            </h4>
            <Button>Explore Insights</Button>
          </div>
          <div className="bg-amber-500 aspect-square">2</div>
          <div className="bg-amber-500 aspect-square">3</div>
          <div className="bg-amber-500 aspect-square">4</div>
          <div className="bg-amber-500 aspect-square">5</div>
          <div className="bg-amber-500 aspect-square">6</div>
        </div>
      </div>
    </Section>
  );
};
