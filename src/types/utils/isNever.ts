export const isNever = (_: never, source: string) => {
  throw new Error(`This should be impossible. Called from ${source}.`);
};
