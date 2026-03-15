/**
 * Responsibility:
 * Demonstrates React Query usage with QueryClientProvider.
 *
 * Architectural Alignment:
 * - Dependency Injection
 */

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { UserProfile } from "../components/UserProfile"

const queryClient = new QueryClient()

export function UserProfilePage() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProfile />
    </QueryClientProvider>
  )
}