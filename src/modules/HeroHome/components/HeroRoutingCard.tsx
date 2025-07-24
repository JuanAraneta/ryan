import { ZoomImage } from "@/components/core/ZoomImage";
import { MdKeyboardBackspace } from "react-icons/md";

interface HeroRoutingCardProps {
  imageUrl: string;
  eyebrow: string;
  subheading: string;
  href: string;
}

export const HeroRoutingCard = ({
  imageUrl,
  eyebrow,
  subheading,
  href,
}: HeroRoutingCardProps) => {
  return (
    <a href={href} className="flex-1 group relative">
      <ZoomImage src={imageUrl} alt={eyebrow} className="aspect-21/9" />

      <div className="flex-col py-6 px-10 gap-3 contents dsk:flex">
        <p className="flex items-center justify-between gap-2 absolute bottom-[1.12rem] dsk:static w-full px-4 dsk:px-0">
          <span className="typo-eyebrow">{eyebrow}</span>
          <MdKeyboardBackspace className="w-6 h-6 rotate-180 dsk:group-hover:translate-x-2 transition-transform duration-100" />
        </p>

        <span className="typo-heading-4 font-light hidden dsk:block">
          {subheading}
        </span>
      </div>
    </a>
  );
};
