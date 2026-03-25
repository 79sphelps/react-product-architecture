/**
 * Responsibility:
 * Bridges cache and UI via subscriptions.
 *
 * Pattern:
 * Functional observer (no class)
 */

import type { QueryState } from "./types";
import type { createQueryCache } from "./QueryCache";

type QueryCacheType = ReturnType<typeof createQueryCache>;

export function createQueryObserver<T>(
  cache: QueryCacheType,
  key: string
) {
  function subscribe(
    callback: (state: QueryState<T>) => void
  ) {
    return cache.subscribe(key, callback);
  }

  function getCurrent(): QueryState<T> | undefined {
    return cache.get(key);
  }

  return {
    subscribe,
    getCurrent,
  };
}