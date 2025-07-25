import { ContentFields, Control, KeyValueMap } from "contentful-management";

export type ExpandedFieldDetails = Omit<
  ContentFields<KeyValueMap>,
  "localized" | "required" | "disabled" | "omitted"
> &
  Partial<
    Pick<
      ContentFields<KeyValueMap>,
      "localized" | "required" | "disabled" | "omitted"
    >
  > & {
    editorInterface?: Omit<Control, "fieldId">;
    displayField?: boolean;
  };
