/**
 * Responsibility:
 * Hook to fetch and subscribe to query state.
 */

import { useEffect, useState } from "react";
import { queryClient } from "../core/QueryClient";
import { createQueryObserver } from "../core/QueryObserver";
import type { QueryFn, QueryState } from "../core/types";

export function useQuery<T>(
  key: string,
  fn: QueryFn<T>,
  options?: {
    enabled?: boolean
    staleTime?: number
  }
) {
  const [state, setState] = useState<QueryState<T>>({
    status: "idle",
    data: null,
    error: null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    isFetching: false,
    updatedAt: 0,
  })

  useEffect(() => {
    if (options?.enabled === false) return

    const observer = createQueryObserver<T>(
      queryClient.getCache(),
      key
    )

    const unsubscribe = observer.subscribe((next) => {
      setState(next)
    })

    const current = observer.getCurrent()
    if (current) setState(current)

    queryClient.fetchQuery(key, fn, {
      staleTime: options?.staleTime,
    })

    return () => {
      unsubscribe()
    }
  }, [key, options?.enabled, options?.staleTime])

  return {
    ...state,
    refetch: () =>
      queryClient.fetchQuery(key, fn, {
        staleTime: options?.staleTime,
      }),
  }
}