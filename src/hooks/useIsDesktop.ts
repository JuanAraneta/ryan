import { useMediaQuery } from "@react-hookz/web";

export const useIsDesktop = () =>
  useMediaQuery("only screen and (min-width : 1024px)", {
    initializeWithValue: false,
  });
