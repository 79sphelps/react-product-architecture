import { errorStore } from "../core/createErrorStore"

export function GlobalErrorExample() {
  return (
    <div className="space-y-4">
      <button
        onClick={() =>
          errorStore.setError({ message: "Global failure" })
        }
        className="border rounded px-3 py-2"
      >
        Trigger Global Error
      </button>
    </div>
  )
}