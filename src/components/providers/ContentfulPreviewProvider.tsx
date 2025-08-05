"use client";

import { ContentfulLivePreviewInitConfig } from "@contentful/live-preview";
import { ContentfulLivePreviewProvider } from "@contentful/live-preview/react";
import { PropsWithChildren } from "react";

const space = process.env.CONTENTFUL_SPACE_ID;
const environment = process.env.CONTENTFUL_ENVIRONMENT;

export function ContentfulPreviewProvider({
  children,
  ...props
}: PropsWithChildren<ContentfulLivePreviewInitConfig>) {
  return (
    <ContentfulLivePreviewProvider
      space={space}
      environment={environment}
      {...props}
    >
      {children}
    </ContentfulLivePreviewProvider>
  );
}
