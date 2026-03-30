import { useAsyncError } from "../hooks/useAsyncError"

export function AsyncExample() {
  const { error, run } = useAsyncError()

  return (
    <div className="space-y-2">
      <button
        onClick={() =>
          run(async () => {
            throw new Error("Async failed")
          })
        }
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Trigger Async Error
      </button>

      {error && <p className="text-red-500">{error}</p>}
    </div>
  )
}