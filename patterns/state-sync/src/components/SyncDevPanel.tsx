import { useSyncedState } from "../hooks/useSyncedState"
import { useState } from "react"

export function SyncDevPanel() {
  const { state } = useSyncedState()
  const [open, setOpen] = useState(true)

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="mb-2 px-3 py-1 bg-black text-white text-xs rounded"
      >
        Dev Panel
      </button>

      {open && (
        <div className="w-[320px] h-[260px] bg-black text-green-400 text-xs rounded-lg shadow-lg p-3 overflow-auto">
          <div className="text-white font-bold mb-2">
            App State
          </div>

          <pre>
            {JSON.stringify(state, null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
}