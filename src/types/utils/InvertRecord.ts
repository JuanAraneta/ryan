export type InvertRecord<R extends Record<string, string>> = {
  [V in R[keyof R]]: Extract<
    keyof R,
    { [K in keyof R]: R[K] extends V ? K : never }[keyof R]
  >;
};
