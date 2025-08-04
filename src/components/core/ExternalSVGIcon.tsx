"use client";

import { useState, useEffect } from "react";

interface ExternalSVGIconProps {
  url: string;
  alt?: string;
  className?: string;
}

export const ExternalSVGIcon = ({
  url,
  alt,
  className = "w-full h-full",
}: ExternalSVGIconProps) => {
  const [svgContent, setSvgContent] = useState<string>("");

  useEffect(() => {
    if (!url) return;

    const getSvgContent = async () => {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Failed to fetch SVG: ${res.status}`);
      }
      const svgContent = await res.text();
      setSvgContent(svgContent);
    };

    getSvgContent();
  }, [url]);

  if (!svgContent) return null;

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: svgContent }}
      role="img"
      aria-label={alt}
    />
  );
};
