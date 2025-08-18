"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ContentfulLivePreview } from "@contentful/live-preview";

export function ContentfulLivePreviewScript() {
  const router = useRouter();

  useEffect(() => {
    // Only initialize in preview mode and on the client side
    if (typeof window !== "undefined") {
      ContentfulLivePreview.init({
        locale: "en-US",
        debugMode: false,
        enableLiveUpdates: true,
        enableInspectorMode: true,
      });

      ContentfulLivePreview.subscribe("save", {
        callback: async () => {
          const pathname = window.location.pathname;
          await fetch(`/api/revalidate?pathname=${pathname}`);
          router.refresh();
        },
      });
    }
  }, [router]);

  const handleDisable = async () => {
    await fetch("/api/disable-draft");
    window.location.reload();
  };

  return (
    // Preview mode banner
    <div className="fixed top-0 left-0 w-full text-white bg-danger/70 backdrop-blur-sm z-50 flex items-center justify-between typo-eyebrow px-4 py-2">
      <span>Preview mode enabled</span>
      <button
        className="bg-white text-danger typo-eyebrow px-2 py-1 rounded-md cursor-pointer"
        onClick={handleDisable}
      >
        Disable
      </button>
    </div>
  );
}
