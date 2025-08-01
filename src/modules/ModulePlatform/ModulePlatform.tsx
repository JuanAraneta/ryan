import { Section } from "@/components/core/Section";
import { GetModulePlatformById } from "@/lib/contentful/query/GetModulePlatformById";
import { ResultOf } from "gql.tada";

export const ModulePlatform = ({
  data,
}: {
  data: ResultOf<typeof GetModulePlatformById>;
}) => {
  const platformModule = data.modulePlatform;
  if (!platformModule) return null;

  return (
    <Section data-testid="ModulePlatform" className="py-16 dsk:py-24">
      ModulePlatform
    </Section>
  );
};
