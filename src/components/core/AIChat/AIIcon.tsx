"use client";

import { cx } from "cva";
import { motion, MotionProps } from "motion/react";
import { Icons } from "@/components/icons";

export const AIIcon = ({ className = "" }: { className?: string }) => {
  const transition: MotionProps["transition"] = {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
    repeatType: "mirror",
  } as const;

  return (
    <div
      className={cx(
        "relative size-10 aspect-square flex items-center justify-center",
        className,
      )}
    >
      {/* Outer circle */}
      <motion.span
        className="absolute inset-0 rounded-full border border-new-gold"
        initial={{ scale: 1, opacity: 1 }}
        animate={{ scale: [1, 1.3, 1.3, 1] }}
        transition={transition}
      />

      {/* Inner circle */}
      <motion.span
        className="absolute inset-0 rounded-full border border-new-gold opacity-50"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [1, 1, 1, 0.8], opacity: [1, 1, 1, 0] }}
        transition={transition}
      />

      <span className="absolute inset-0 bg-new-gold/50 rounded-full blur-lg" />

      <span className="relative z-10 flex items-center justify-center">
        <Icons.IA className="text-new-gold" />
      </span>
    </div>
  );
};
