import { useSyncedState } from "../hooks/useSyncedState"

export function StatePanel() {
  const { state } = useSyncedState()

  return (
    <div className="p-4 border rounded bg-white shadow">
      <h2 className="text-sm font-semibold mb-2">
        Store State (Source of Truth)
      </h2>

      <pre className="text-xs bg-gray-100 p-2 rounded">
        {JSON.stringify(state, null, 2)}
      </pre>
    </div>
  )
}