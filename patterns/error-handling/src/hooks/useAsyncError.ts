/**
 * Pattern: Controlled Async Error Handling
 *
 * Why:
 * - React does not catch async errors automatically
 * - Prevents unhandled promise rejections
 * - Centralizes async error logic
 *
 * Data Flow:
 * async fn → catch → normalizeError → state + optional global store
 */

import { useState } from "react"
import { normalizeError } from "../utils/normalizeError"
import { errorStore } from "../core/createErrorStore"

export function useAsyncError() {
  const [error, setError] = useState<string | null>(null)

  async function run<T>(fn: () => Promise<T>): Promise<T | null> {
    try {
      setError(null)
      return await fn()
    } catch (err) {
      const normalized = normalizeError(err)
      setError(normalized.message)
      errorStore.setError(normalized)
      return null
    }
  }

  return { error, run }
}