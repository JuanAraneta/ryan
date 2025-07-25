import omit from "lodash/omit";

export const createIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit & {
    signal: AbortSignal;
    observe?: HTMLElement | Array<HTMLElement>;
    cleanup?: () => void;
  },
) => {
  const observer = new IntersectionObserver(
    callback,
    omit(options, ["signal", "observe"]),
  );

  options.signal.addEventListener(
    "abort",
    () => {
      observer.disconnect();
      options.cleanup?.();
    },
    { once: true },
  );

  const observe = options.observe;
  if (observe) {
    (Array.isArray(observe) ? observe : [observe]).forEach((element) =>
      observer.observe(element),
    );
  }

  return observer as Omit<typeof observe, "disconnect">;
};
