import { useEffect, useRef, useState } from "react";

export const useOnScreenEffect = <T extends Element>(
  callback: (isOnScreen: boolean) => unknown,
  deps?: ReadonlyArray<unknown>,
  fireInitialState = true
) => {
  const ref = useRef<T>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => callback(entry.isIntersecting),
      { rootMargin: "0px" }
    );

    const element = ref.current;
    if (!element) return;
    if (fireInitialState && element) {
      const { top, bottom } = element.getBoundingClientRect();
      const isOnScreen =
        (top > 0 && top < window.innerHeight) ||
        (bottom < window.innerHeight && bottom > 0);
      callback(isOnScreen);
    }

    observer.observe(element);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
};

export const useOnScreenState = <T extends Element>(
  opts: { once?: boolean } = {}
) => {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const ref = useOnScreenEffect<T>(
    (latestOnScreen) => {
      if (opts.once && isOnScreen) return;
      setIsOnScreen(latestOnScreen);
    },
    [isOnScreen, opts.once]
  );

  return [isOnScreen, ref] as const;
};
