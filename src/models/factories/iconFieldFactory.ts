import merge from "lodash/merge";
import { ExpandedFieldDetails } from "../types/ExpandedFieldDetails";

export const iconFieldFactory = ({
  id = "icon",
  name = "Icon",
  ...props
}: {
  id?: string;
  name?: string;
}): ExpandedFieldDetails =>
  merge(
    {
      id,
      name,
      type: "Link",
      linkType: "Asset",
      validations: [
        { linkMimetypeGroup: ["image"] },
        {
          assetImageDimensions: { width: { max: 18 }, height: { max: 18 } },
          message:
            "Icon cannot be bigger than 18x18 pixels, use assets tagged with 'icon'.",
        },
        { assetFileSize: { max: 10240 } },
      ],
      editorInterface: {
        widgetId: "assetLinkEditor",
        settings: {
          helpText: "SVG files only, 18x18px max, under 10KB.",
          showLinkEntityAction: true,
          showCreateEntityAction: false,
        },
      },
    },
    props,
  );
