import { ContentfulLivePreview } from "@contentful/live-preview";

export type Inspector<T> = (
  fieldId: keyof Omit<T, "sys" | "__typename">,
) => ReturnType<typeof ContentfulLivePreview.getProps>;

export const getInspector = <T extends { sys: { id: string } }>(
  data: T,
): Inspector<T> => {
  const entryId = data.sys.id;

  if (!entryId) throw new Error("Entry ID not found in inspector mode");

  type FieldNames = keyof T;

  return (fieldId: FieldNames) =>
    ContentfulLivePreview.getProps({
      entryId,
      fieldId: String(fieldId),
    });
};
