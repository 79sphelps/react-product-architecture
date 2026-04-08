import { useSyncedState } from "../hooks/useSyncedState"

export function SyncStatus() {
  const { state } = useSyncedState()

  return (
    <div className="text-xs text-gray-500">
      URL Synced: {state.q ? "Yes" : "No"}
    </div>
  )
}