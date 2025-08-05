"use client";

import { readFragment, FragmentOf } from "gql.tada";
import { ComponentNewsletterSignupFragment } from "@/lib/contentful/fragments/ComponentNewsletterSignupFragment";
import { Button } from "@/components/core/Button";
import { useConstants } from "@/components/providers/ConstantsContext";
import { useContentfulPreview } from "@/hooks/useContentfulPreview";

export const NewsletterSignup = ({
  data,
}: {
  data: FragmentOf<typeof ComponentNewsletterSignupFragment>;
}) => {
  const { updatedData, inspector } = useContentfulPreview(data);
  const { subscribeButtonLabel } = useConstants();

  const newsletterSignup = readFragment(
    ComponentNewsletterSignupFragment,
    updatedData,
  );

  return (
    <div
      data-testid="NewsletterSignup"
      className="w-full flex flex-col dsk:flex-row dsk:items-center gap-10 p-6 dsk:p-10 bg-brand-700 border-1 border-neutral-200/30 rounded-lg typo-heading-4 font-light"
    >
      <p className="w-full dsk:w-3/5" {...inspector("subhead")}>
        {newsletterSignup.subhead}
      </p>
      {/* TODO: Newsletter signup integration -> https://dept-us.atlassian.net/browse/RT-110 */}
      <Button variant="secondary" className="dsk:ml-auto">
        {subscribeButtonLabel}
      </Button>
    </div>
  );
};
