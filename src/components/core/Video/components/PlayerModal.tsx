"use client";

import { ResultOf } from "gql.tada";
import { WistiaVideoFragment } from "@/lib/contentful/fragments/WistiaVideoFragment";
import { useKeypress } from "@/hooks/useKeypress";
import { CloseButton } from "./CloseButton";
import { motion } from "motion/react";

import { WistiaPlayer } from "./WistiaPlayer";

interface PlayerModalProps {
  data: ResultOf<typeof WistiaVideoFragment> | null;
  onCloseAction: () => void;
}

export const PlayerModal = ({ data, onCloseAction }: PlayerModalProps) => {
  useKeypress("Escape", onCloseAction);

  const renderPlayer = () => {
    if (data?.__typename === "WistiaVideo")
      return <WistiaPlayer data={data.wistiaVideo} />;

    return (
      <div className="w-full h-full flex items-center justify-center typo-eyebrow ">
        Video not available
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed z-10 inset-0 bg-brand-800/80 flex items-center justify-center backdrop-blur-sm px-6 dsk:px-20 animate-fade-in"
    >
      <div className="relative max-w-hd mx-auto bg-white rounded-lg w-full aspect-video overflow-hidden">
        <CloseButton onClickAction={onCloseAction} />

        {renderPlayer()}
      </div>
    </motion.div>
  );
};
