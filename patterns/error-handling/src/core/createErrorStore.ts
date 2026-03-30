/**
 * Responsibility:
 * Global error store (observer pattern)
 * 
 * Pattern: Global Error Store (Observer Pattern)
 *
 * Why:
 * - Enables cross-component error communication
 * - Decouples error producers from UI consumers
 * - Supports global UX (banners, toasts)
 *
 * Data Flow:
 * Error → setError → notify subscribers → UI updates
 */
import type { AppError, ErrorListener } from "./errorTypes"

export function createErrorStore() {
  let error: AppError | null = null
  const listeners = new Set<ErrorListener>()

  function setError(next: AppError | null) {
    error = next
    listeners.forEach((l) => l(error))
  }

  function getError() {
    return error
  }

  function subscribe(listener: ErrorListener) {
    listeners.add(listener)
    return () => listeners.delete(listener)
  }

  return {
    setError,
    getError,
    subscribe,
  }
}

export const errorStore = createErrorStore()