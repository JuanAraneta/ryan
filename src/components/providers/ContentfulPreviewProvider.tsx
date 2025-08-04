"use client";

import {
  ContentfulLivePreview,
  ContentfulLivePreviewInitConfig,
} from "@contentful/live-preview";
import { ContentfulLivePreviewProvider } from "@contentful/live-preview/react";
import { PropsWithChildren } from "react";

export function ContentfulPreviewProvider({
  children,
  ...props
}: PropsWithChildren<ContentfulLivePreviewInitConfig>) {
  ContentfulLivePreview.init({
    ...props,
  });

  return (
    <ContentfulLivePreviewProvider {...props}>
      {children}
    </ContentfulLivePreviewProvider>
  );
}
