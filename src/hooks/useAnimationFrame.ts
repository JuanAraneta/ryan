import { useRef, useEffect } from "react";

export const useAnimationFrame = (
  callback: () => boolean | void,
  deps: ReadonlyArray<unknown>,
) => {
  const closeRecursion = useRef(false);
  useEffect(() => {
    let closeLocal = false;
    const recurseCallback = () => {
      if (closeRecursion.current || closeLocal) return;
      const result = callback();
      if (result) {
        closeRecursion.current = true;
      } else {
        requestAnimationFrame(recurseCallback);
      }
    };
    requestAnimationFrame(recurseCallback);

    return () => {
      closeLocal = true;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};
