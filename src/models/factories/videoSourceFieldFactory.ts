import { DeepPartial } from "@/types/utils/DeepPartial";
import { ExpandedFieldDetails } from "../types/ExpandedFieldDetails";
import merge from "lodash/merge";

export const videoSourceFieldFactory = (
  props: {
    id: string;
    name: string;
  } & DeepPartial<Omit<ExpandedFieldDetails, "id" | "name" | "type">>,
): ExpandedFieldDetails =>
  merge(
    {
      id: "videoSource",
      name: "Video Source",
      type: "Symbol",
      localized: false,
      required: false,
      validations: [
        {
          in: ["wistia", "youtube", "brandfolder"],
        },
      ],
      defaultValue: {
        "en-US": "wistia",
      },
      disabled: false,
      omitted: false,
    } as Omit<ExpandedFieldDetails, "id" | "name">,
    props,
  );
