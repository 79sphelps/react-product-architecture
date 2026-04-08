import { store } from "../state"
import { createURLAdapter } from "../core/urlAdapter"

export function ManualSyncControls() {
  const adapter = createURLAdapter()

  return (
    <div className="p-4 border rounded bg-white shadow space-x-2">
      <button
        onClick={() => adapter.write(store.getState())}
        className="px-3 py-1 bg-blue-500 text-white text-xs rounded"
      >
        Push → URL
      </button>

      <button
        onClick={() =>
          store.setState(adapter.read())
        }
        className="px-3 py-1 bg-green-500 text-white text-xs rounded"
      >
        Pull ← URL
      </button>
    </div>
  )
}