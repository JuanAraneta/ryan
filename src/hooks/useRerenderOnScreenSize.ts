import { useEffect, useState } from "react";

export const useRerenderOnScreenSize = () => {
  const [, setState] = useState(0);

  useEffect(() => {
    const handler = () => setState((state) => state + 1);
    window.addEventListener("resize", handler);
    handler();
    return () => window.removeEventListener("resize", handler);
  }, []);
};
