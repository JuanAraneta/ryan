import { useMediaQuery } from "@react-hookz/web";

export const useBreakpoint = () => {
  const isDesktop =
    useMediaQuery("only screen and (min-width : 1024px)", {
      initializeWithValue: false,
    }) ?? false;

  return {
    isDesktop,
    isMobile: !isDesktop,
  };
};
