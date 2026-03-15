/**
 * Responsibility:
 * Handles updating user data with optimistic UI.
 *
 * Architectural Alignment:
 * - Optimistic Updates
 * - Cache Invalidation
 */

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateUser } from "../api/userApi"

export function useUpdateUserMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateUser,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] })
    }
  })
}