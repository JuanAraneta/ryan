import { useEffect } from "react";

export const useKeypress = (key: string, action: () => void) => {
  useEffect(() => {
    const handleKeypress = (event: KeyboardEvent) => {
      if (event.key === key) {
        action();
      }
    };

    window.addEventListener("keydown", handleKeypress);

    return () => {
      window.removeEventListener("keydown", handleKeypress);
    };
  }, [key, action]);
};
