"use client";

import { useRef, useState } from "react";
import { cx } from "cva";
import { useLayoutEffect } from "@/hooks/useLayoutEffect";
import { useOnScreenState } from "@/hooks/useOnScreenEffect";
import { useAnimationFrame } from "@/hooks/useAnimationFrame";

type AnimatableNumberProps = {
  value: string;
  startingValue?: number;
  duration?: number;
  easing?:
    | ((
        currentTime: number,
        startValue: number,
        finalValue: number,
        duration: number,
      ) => number)
    | keyof typeof easing;
};

export const AnimatableNumber: React.FC<AnimatableNumberProps> = ({
  value: finalValueStrWithCommas,
  startingValue = 0,
  duration = 3000,
  easing: easingProp = "quart",
  ...props
}) => {
  const [onScreen, ref] = useOnScreenState<HTMLSpanElement>({ once: true });
  const easingFunction =
    typeof easingProp === "string" ? easing[easingProp] : easingProp;
  const usesCommas = finalValueStrWithCommas.includes(",");
  const finalValueStr = finalValueStrWithCommas.replaceAll(",", "");
  const precision = findPrecision(finalValueStr);
  const finalValue = Number.parseFloat(finalValueStr) * 10 ** precision;
  const startTime = useRef(Date.now());
  const [value, setValue] = useState(startingValue);

  useLayoutEffect(() => {
    if (!onScreen) return;
    startTime.current = Date.now();
  }, [onScreen]);

  useAnimationFrame(() => {
    if (!onScreen) return;
    const currentTime = Date.now() - startTime.current;
    setValue(easingFunction(currentTime, startingValue, finalValue, duration));
    const isDone = currentTime > duration;
    if (isDone) {
      setValue(finalValue);
    }
    return isDone;
  }, [
    onScreen,
    startTime.current,
    startingValue,
    finalValue,
    duration,
    easingFunction,
  ]);

  return (
    <span ref={ref} className="relative" {...props}>
      <span className="select-none opacity-0" aria-hidden>
        {getPrintout(finalValue, precision, usesCommas)}
      </span>
      <span
        aria-hidden
        className={cx(
          "absolute right-0 transition-opacity",
          onScreen ? "opacity-100" : "opacity-0",
        )}
      >
        {getPrintout(value, precision, usesCommas)}
      </span>
    </span>
  );
};

const getPrintout = (
  value: number,
  precision: number,
  commas: boolean,
): string => {
  const base = (value / 10 ** precision).toFixed(precision);
  if (!commas) {
    return base;
  } else {
    const parts = base.split(".");
    const whole = parts[0];
    const decimal = parts[1];
    const wholeWithCommas = whole.replaceAll(/\B(?=(\d{3})+(?!\d))/g, ",");

    return !decimal ? wholeWithCommas : `${wholeWithCommas}.${decimal}`;
  }
};

export const easing = {
  quad: (
    currentTime: number,
    startValue: number,
    finalValue: number,
    duration: number,
  ): number => {
    const t = currentTime / duration - 1;
    return finalValue * (1 - t * t) + startValue;
  },
  quart: (
    currentTime: number,
    startValue: number,
    finalValue: number,
    duration: number,
  ): number => {
    const t = currentTime / duration - 1;
    return finalValue * (1 - t * t * t * t) + startValue;
  },
};

const findPrecision = (num: string): number => {
  const parts = num.split(".");
  if (parts.length === 1) {
    return 0;
  }
  return parts[1].length;
};
