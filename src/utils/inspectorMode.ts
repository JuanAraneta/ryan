import { ContentfulLivePreview } from "@contentful/live-preview";

export const getInspector = <T extends { sys: { id: string } }>(data: T) => {
  const entryId = data.sys.id;

  if (!entryId) throw new Error("Entry ID not found in inspector mode");

  const inspector = (fieldId: string) =>
    ContentfulLivePreview.getProps({ entryId, fieldId });

  return inspector;
};
