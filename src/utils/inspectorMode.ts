import { ContentfulLivePreview } from "@contentful/live-preview";

interface InspectorData {
  sys: { id: string };
}

export const getInspector = <T extends InspectorData>(data: T) => {
  const entryId = data.sys.id;

  if (!entryId) throw new Error("Entry ID not found in inspector mode");

  type FieldNames = keyof Omit<typeof data, "sys" | "__typename">;

  return (fieldId: FieldNames) =>
    ContentfulLivePreview.getProps({
      entryId,
      fieldId: String(fieldId),
    });
};
