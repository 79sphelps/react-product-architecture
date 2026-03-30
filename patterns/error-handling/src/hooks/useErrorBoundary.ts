import { useEffect } from "react"

export function useErrorBoundary(error: Error | null) {
  useEffect(() => {
    if (error) {
      throw error
    }
  }, [error])
}