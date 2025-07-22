import { useEffect, useLayoutEffect as useLayoutEffectInternal } from "react";

// This keeps next from complaining
export const useLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffectInternal;
