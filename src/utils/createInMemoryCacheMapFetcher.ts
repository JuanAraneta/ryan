type Cache<Value> = { map: Map<string, Value>; init: number };

const createCache = <Value>(): Cache<Value> => ({
  map: new Map<string, Value>(),
  init: Date.now(),
});

export const createInMemoryCacheMapFetcher = <Value>(
  opts: {
    ttl?: number;
  } = {},
) => {
  let cache: null | Cache<Value> = null;

  return () => {
    if (!cache || (opts.ttl != null && Date.now() > cache.init + opts.ttl)) {
      cache = createCache();
    }

    return {
      map: cache.map,
      reset: () => (cache = createCache()),
    };
  };
};
