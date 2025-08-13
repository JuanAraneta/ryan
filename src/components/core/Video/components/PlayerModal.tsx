"use client";

import { useEffect } from "react";
import { ResultOf } from "gql.tada";
import { WistiaVideoFragment } from "@/lib/contentful/fragments/WistiaVideoFragment";
import { WistiaPlayer } from "@wistia/wistia-player-react";
import { CloseButton } from "./CloseButton";

interface PlayerModalProps {
  data: ResultOf<typeof WistiaVideoFragment> | null;
  onCloseAction: () => void;
}

export const PlayerModal = ({ data, onCloseAction }: PlayerModalProps) => {
  // on esc close
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onCloseAction();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onCloseAction]);

  const renderPlayer = () => {
    if (data?.__typename === "WistiaVideo") {
      const id = data.wistiaVideo?.items[0].hashed_id;
      return <WistiaPlayer mediaId={id} autoplay />;
    }

    return null;
  };

  return (
    <div className="fixed z-10 inset-0 bg-brand-800/80 flex items-center justify-center backdrop-blur-sm px-6 dsk:px-20 animate-fade-in">
      <div className="relative max-w-hd mx-auto bg-white rounded-lg w-full aspect-video overflow-hidden">
        <CloseButton onClickAction={onCloseAction} />

        {renderPlayer()}
      </div>
    </div>
  );
};
