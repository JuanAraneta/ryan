import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";

/**
 * Custom hook that combines Contentful Live Preview functionality
 * for use in modules that need live updates and inspector mode.
 *
 * @example
 * ```tsx
 * export function MyModule({ data }: { data: ModuleData }) {
 *   const { updatedData, inspector } = useContentfulPreview(data);
 *
 *   return (
 *     <div {...inspector("headline")}>
 *       <RichText content={updatedData.headline} />
 *     </div>
 *   );
 * }
 * ```
 */
export function useContentfulPreview<T>(data: T) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const updatedData = useContentfulLiveUpdates(data as any);

  const entryId = updatedData?.sys?.id;

  if (!entryId) throw new Error(`No entry ID found for ${data}`);

  const inspectorProps = useContentfulInspectorMode({ entryId });

  const inspector = (fieldId: string) => inspectorProps({ fieldId });

  return {
    updatedData: updatedData as T,
    inspector,
  };
}
