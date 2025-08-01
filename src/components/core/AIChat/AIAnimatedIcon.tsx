"use client";

import { cx } from "cva";
import { AIIcon } from "@/components/icons";

export const AIAnimatedIcon = ({ className = "" }: { className?: string }) => {
  return (
    <div
      className={cx(
        "relative size-10 aspect-square flex items-center justify-center",
        className,
      )}
    >
      {/* Outer circle */}
      <span className="absolute inset-0 rounded-full border border-new-gold animate-pulse-scale" />

      {/* Inner circle */}
      <span className="absolute inset-0 rounded-full border border-new-gold opacity-50 animate-fade-scale" />

      <span className="absolute inset-0 bg-new-gold/50 rounded-full blur-lg" />

      <span className="relative z-10 flex items-center justify-center">
        <AIIcon className="text-new-gold w-5" />
      </span>
    </div>
  );
};
