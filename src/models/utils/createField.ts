import { factoryRegistry } from "../factories/factoryRegistry";

export const createField = <FactoryKey extends keyof typeof factoryRegistry>(
  factory: FactoryKey,
  ...args: Parameters<(typeof factoryRegistry)[FactoryKey]>
  // @ts-expect-error This is correct 🤷‍♂️
) => factoryRegistry[factory](...args);
