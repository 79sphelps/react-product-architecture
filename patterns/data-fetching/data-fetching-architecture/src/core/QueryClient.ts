/**
 * Responsibility:
 * Orchestrates fetching, caching, retries, and timing.
 */
import { createQueryCache } from "./QueryCache";
import type { QueryFn, QueryState } from "./types";
import { retry } from "../utils/retry";
import { delay } from "../utils/delay";

const DEFAULT_STALE_TIME = 5000;

function isStale(updatedAt: number, staleTime: number) {
  return Date.now() - updatedAt > staleTime;
}

export function createQueryClient() {
  const cache = createQueryCache();

  function buildState<T>(partial: Partial<QueryState<T>>): QueryState<T> {
    return {
      status: partial.status ?? "idle",
      data: partial.data ?? null,
      error: partial.error ?? null,
      isLoading: partial.isLoading ?? false,
      isError: partial.isError ?? false,
      isSuccess: partial.isSuccess ?? false,
      isFetching: partial.isFetching ?? false,
      updatedAt: partial.updatedAt ?? 0,
    };
  }

  async function fetchQuery<T>(
    key: string,
    fn: QueryFn<T>,
    options?: { staleTime?: number },
  ) {
    const staleTime = options?.staleTime ?? DEFAULT_STALE_TIME;
    const existing = cache.get<T>(key);

    if (existing && !isStale(existing.updatedAt, staleTime)) {
      return;
    }

    cache.set<T>(
      key,
      buildState<T>({
        status: "loading",
        data: existing?.data ?? null,
        isLoading: true,
        isFetching: true,
      }),
    );

    try {
      await delay(300);
      const data = await retry(fn);

      cache.set<T>(
        key,
        buildState<T>({
          status: "success",
          data,
          isSuccess: true,
          updatedAt: Date.now(),
        }),
      );
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Unknown error";

      cache.set<T>(
        key,
        buildState<T>({
          status: "error",
          error: { message },
          isError: true,
          updatedAt: Date.now(),
        }),
      );
    }
  }

  function invalidateQueries(key: string) {
    const existing = cache.get(key);
    if (!existing) return;

    cache.set(
      key,
      buildState({
        ...existing,
        updatedAt: 0, // force stale
      }),
    );
  }

  return {
    fetchQuery,
    invalidateQueries,
    getCache: () => cache,
  };
}

export const queryClient = createQueryClient();
