/**
 * Responsibility:
 * Stores query state and notifies subscribers.
 *
 * Pattern:
 * Functional module (closure-based state)
 */

import type { QueryState, Listener } from "./types";

type QueryKey = string;

export function createQueryCache() {
  const store = new Map<QueryKey, QueryState<unknown>>();
  const listeners = new Map<QueryKey, Set<Listener<any>>>();

  function get<T>(key: QueryKey): QueryState<T> | undefined {
    return store.get(key) as QueryState<T> | undefined;
  }

  function set<T>(key: QueryKey, state: QueryState<T>) {
    store.set(key, state);

    const subs = listeners.get(key);
    subs?.forEach((cb) => cb(state));
  }

  function subscribe<T>(
    key: QueryKey,
    listener: Listener<QueryState<T>>
  ) {
    if (!listeners.has(key)) {
      listeners.set(key, new Set());
    }

    listeners.get(key)!.add(listener);

    return () => {
      listeners.get(key)?.delete(listener);
    };
  }

  return {
    get,
    set,
    subscribe,
  };
}