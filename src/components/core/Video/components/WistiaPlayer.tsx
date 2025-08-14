"use client";

import { WistiaPlayer as WistiaPlayerReact } from "@wistia/wistia-player-react";
import { type WistiaVideoData } from "@/components/types/video.types";

export const WistiaPlayer = ({ data }: { data: unknown }) => {
  if (!data) return null;

  const videoData = data as WistiaVideoData;
  const mediaId = videoData.items[0]?.hashed_id;

  return (
    <WistiaPlayerReact
      mediaId={mediaId}
      aspect={16 / 9}
      onApiReady={() => console.log("Player listo")}
      onPlay={() => console.log("Reproduciendo")}
    />
  );
};
