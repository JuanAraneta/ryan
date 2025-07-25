import { ContentModel } from "contentful-code-models";
import { ExpandedContentModel } from "../types/ExpandedContentModel";

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
      clone.editorInterface?.controls?.push({
        fieldId: field.id,
        ...field.editorInterface,
      });
      delete field.editorInterface;
    }
    // Mark the displayField if this field identifies as such
    if ("displayField" in field) {
      if (field.displayField) {
        if (clone.displayField && clone.displayField !== field.id) {
          throw new Error(
            `Type ${clone.sys.id} has two multiple fields trying to identify as the entryTitle.`,
          );
        }
        clone.displayField = field.id;
      }
      delete field.displayField;
    }

    // Fulfill defaults
    clone.fields[index] = {
      localized: false,
      required: false,
      disabled: false,
      omitted: false,
      // Override with existing values
      ...field,
    };
  });

  return clone as ContentModel;
};
