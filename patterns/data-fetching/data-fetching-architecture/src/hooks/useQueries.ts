import { useQuery } from "./useQuery"
import type { QueryFn } from "../core/types"

export function useQueries<T extends any[]>(
  queries: {
    key: string
    fn: QueryFn<any>
    enabled?: boolean
  }[]
) {
  return queries.map((q) =>
    useQuery(q.key, q.fn, { enabled: q.enabled })
  )
}