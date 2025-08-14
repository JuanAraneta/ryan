type WistiaVideoAsset = {
  hashed_id: string;
  id: number;
  duration: number;
  thumbnail: {
    url: string;
    width: number;
    height: number;
  };
};

export type WistiaVideoData = {
  items: WistiaVideoAsset[];
};
