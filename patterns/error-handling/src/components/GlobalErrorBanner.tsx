import { useEffect, useState } from "react"
import { errorStore } from "../core/createErrorStore"

export function GlobalErrorBanner() {
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    return errorStore.subscribe((err) => {
      setError(err?.message ?? null)
    })
  }, [])

  if (!error) return null

  return (
    <div className="bg-red-600 text-white p-3 text-center">
      {error}
    </div>
  )
}