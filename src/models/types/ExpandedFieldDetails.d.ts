import { ContentFields, Control, KeyValueMap } from "contentful-management";

export type ExpandedFieldDetailsOptionalFields =
  | "localized"
  | "required"
  | "disabled"
  | "omitted";

export type BaseFieldDetails = ContentFields<KeyValueMap>;

export type ExpandedFieldDetails = Omit<
  BaseFieldDetails,
  ExpandedFieldDetailsOptionalFields
> &
  Partial<Pick<BaseFieldDetails, ExpandedFieldDetailsOptionalFields>> & {
    editorInterface?: Omit<Control, "fieldId">;
    displayField?: boolean;
  };
