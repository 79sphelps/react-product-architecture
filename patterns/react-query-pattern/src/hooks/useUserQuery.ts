/**
 * Responsibility:
 * Fetches the current user using React Query.
 *
 * Architectural Alignment:
 * - Server State Management
 * - Cache-first architecture
 */

import { useQuery } from "@tanstack/react-query"
import { getUser } from "../api/userApi"

export function useUserQuery() {
  return useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    staleTime: 1000 * 60 * 5
  })
}