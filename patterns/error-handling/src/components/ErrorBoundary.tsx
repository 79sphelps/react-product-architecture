/**
 * Responsibility:
 * Functional error boundary wrapper using controlled error state
 *
 * Notes:
 * - React does not support hook-based error boundaries natively
 * - This pattern simulates boundary behavior via state + try/catch rendering
 * 
 * Pattern: UI Error Boundary
 *
 * Why:
 * - Prevents full app crashes
 * - Isolates rendering failures
 * - Provides fallback UI
 *
 * Data Flow:
 * render error → catch → fallback UI
 */

import { useState, type ReactNode } from "react"
import { ErrorFallback } from "./ErrorFallback"

type Props = {
  children: ReactNode
}

export function ErrorBoundary({ children }: Props) {
  const [error, setError] = useState<Error | null>(null)

  if (error) {
    return <ErrorFallback error={error} />
  }

  try {
    return children
  } catch (err) {
    const normalized =
      err instanceof Error ? err : new Error("Unknown error")

    setError(normalized)
    return null
  }
}