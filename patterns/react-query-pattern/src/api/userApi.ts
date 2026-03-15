/**
 * Responsibility:
 * Encapsulates all user-related API calls.
 *
 * Why it exists:
 * Keeps server communication outside UI and hooks.
 *
 * Architectural Alignment:
 * - Separation of Concerns
 * - Domain-based API modules
 */

import { api } from "./apiClient"

export interface User {
  id: string
  name: string
  email: string
}

export function getUser() {
  return api<User>("/api/user")
}

export function updateUser(data: Partial<User>) {
  return api<User>("/api/user", {
    method: "PATCH",
    body: JSON.stringify(data)
  })
}
