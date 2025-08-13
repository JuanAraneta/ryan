"use client";

import { MdClose } from "react-icons/md";

interface CloseButtonProps {
  onClickAction: () => void;
}

export const CloseButton = ({ onClickAction }: CloseButtonProps) => (
  <button
    className="absolute top-[10px] right-3 p-2 rounded-full border-2 border-brand-800 bg-white cursor-pointer z-10"
    onClick={onClickAction}
  >
    <MdClose className="w-6 h-6 text-brand-800" />
  </button>
);
