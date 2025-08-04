import { draftMode } from "next/headers";

export const DraftModeBanner = async () => {
  const draft = await draftMode();

  if (!draft.isEnabled) return null;

  return (
    <div className="fixed top-0 left-0 w-full text-white bg-danger backdrop-blur-sm z-50 flex items-center justify-center p-2 typo-eyebrow">
      Draft mode enabled
    </div>
  );
};
