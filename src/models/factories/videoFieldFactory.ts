import { DeepPartial } from "@/types/utils/DeepPartial";
import { ExpandedFieldDetails } from "../types/ExpandedFieldDetails";
import merge from "lodash/merge";

export const videoFieldFactory = (
  props: {
    id: string;
    name: string;
  } & DeepPartial<Omit<ExpandedFieldDetails, "id" | "name" | "type">>,
): ExpandedFieldDetails =>
  merge(
    {
      type: "Link",
      linkType: "Entry",
      localized: false,
      validations: [
        { linkContentType: ["wistiaVideo"] }, // TODO: Add other video types here, not use the reference to the asset model to avoid circular dependency
      ],
    } as Omit<ExpandedFieldDetails, "id" | "name">,
    props,
  );
