"use client";

import { useState } from "react";
import { cx } from "cva";
import { readFragment, FragmentOf } from "gql.tada";
import { WistiaVideoFragment } from "@/lib/contentful/fragments/WistiaVideoFragment";
import { AssetFragment } from "@/lib/contentful/fragments/AssetFragment";
import { MdOutlinePlayArrow } from "react-icons/md";
import { PlayerModal } from "./components/PlayerModal";
import { AnimatePresence } from "motion/react";

type VideoData = FragmentOf<typeof WistiaVideoFragment> | null; // TODO: add other types like Brandfolder, Youtube, etc.

interface VideoProps {
  data: VideoData;
  className?: string;
}

export function Video({ data, className = "" }: VideoProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const videoData = readFragment(WistiaVideoFragment, data);

  const { title, thumbnail } = videoData || {};

  const thumbnailData = thumbnail
    ? readFragment(AssetFragment, thumbnail)
    : null;

  return (
    <>
      <div
        className={cx(
          "w-full h-full bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden aspect-video",
          className,
        )}
      >
        {thumbnailData?.url ? (
          <button
            className="relative w-full h-full cursor-pointer"
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/[0.01] backdrop-blur-lg rounded-full flex items-center justify-center border-2 border-white">
              <MdOutlinePlayArrow className="w-6 h-6 text-white" />
            </div>
            <img
              className="w-full h-full object-cover"
              src={thumbnailData.url}
              alt={title || "Video thumbnail"}
            />
          </button>
        ) : (
          <p className="text-gray-500">Video not available</p>
        )}
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <PlayerModal
            data={videoData}
            onCloseAction={() => setIsModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
