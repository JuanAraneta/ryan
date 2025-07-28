import { ContentModel } from "contentful-code-models";
import { ExpandedContentModel } from "../types/ExpandedContentModel";
import {
  BaseFieldDetails,
  ExpandedFieldDetailsOptionalFields,
} from "../types/ExpandedFieldDetails";

export const contentModelComposer = (contentModel: ExpandedContentModel) => {
  const clone = structuredClone(contentModel);

  // Fulfill optional structures
  if (!clone.editorInterface) {
    clone.editorInterface = {
      controls: [],
    };
  }

  // Fulfill optional structures
  if (!clone.editorInterface.controls) {
    clone.editorInterface.controls = [];
  }

  clone.fields.forEach((field, index) => {
    // Place the editorInterface where it needs to go for each field
    if ("editorInterface" in field) {
      clone.editorInterface = {};
      clone.editorInterface?.controls?.push({
        fieldId: field.id,
        ...field.editorInterface,
      });
      if (field.editorInterface?.widgetId) {
        clone.editorInterface.editor = {
          settings: {
            fieldId: field.id,
          },
          widgetNamespace: "editor-builtin",
          widgetId: field.editorInterface.widgetId,
        };
      }
      delete field.editorInterface;
    }
    // Mark the displayField if this field identifies as such
    if ("displayField" in field) {
      if (field.displayField) {
        if (clone.displayField && clone.displayField !== field.id) {
          throw new Error(
            `Type ${clone.sys.id} has multiple fields trying to identify as the entryTitle. Exactly one is required.`,
          );
        }
        clone.displayField = field.id;
      }
      delete field.displayField;
    }

    const optionalFieldsDefaultValues: Pick<
      BaseFieldDetails,
      ExpandedFieldDetailsOptionalFields
    > = { localized: false, required: false, disabled: false, omitted: false };

    // Fulfill defaults
    clone.fields[index] = {
      ...optionalFieldsDefaultValues,
      // Override with existing values
      ...field,
    };
  });

  if (!clone.displayField) {
    throw new Error(
      `Type ${clone.sys.id} has no fields trying to identify as the entryTitle. Exactly one is required.`,
    );
  }

  return clone as ContentModel;
};
