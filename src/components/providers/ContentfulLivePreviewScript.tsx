"use client";

import { useEffect } from "react";
import { ContentfulLivePreview } from "@contentful/live-preview";

export function ContentfulLivePreviewScript() {
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
          window.location.reload();
        },
      });
    }
  }, []);

  return (
    // Preview mode banner
    <div className="fixed top-0 left-0 w-full text-white bg-danger backdrop-blur-sm z-50 flex items-center justify-center p-2 typo-eyebrow">
      Preview mode enabled
    </div>
  );
}
