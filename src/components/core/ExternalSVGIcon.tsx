interface ExternalSVGIconProps {
  url: string;
  alt?: string;
  className?: string;
}

const getSvgContent = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`Failed to fetch SVG: ${res.status}`);
  }
  const svgContent = await res.text();
  return svgContent;
};

export const ExternalSVGIcon = async ({
  url,
  alt,
  className = "w-full h-full",
}: ExternalSVGIconProps) => {
  const svgContent = await getSvgContent(url);

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: svgContent }}
      role="img"
      aria-label={alt}
    />
  );
};
