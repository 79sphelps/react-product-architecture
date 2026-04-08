import { useSyncedState } from "../hooks/useSyncedState"
import { debounce } from "../utils/debounce"
import { useMemo } from "react"

export function FilterPanel() {
  const { state, setState } = useSyncedState()

  const debouncedUpdate = useMemo(
    () =>
      debounce((value: string) => {
        setState({ q: value })
      }, 300),
    [setState]
  )

  return (
    <div className="p-4 border rounded bg-white shadow space-y-3">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium">
          Search
        </label>

        <button
          onClick={() => setState({ q: "" })}
          className="text-xs text-red-500"
        >
          Reset
        </button>
      </div>

      <input
        className="border px-2 py-1 w-full rounded"
        value={state.q}
        onChange={(e) =>
          debouncedUpdate(e.target.value)
        }
      />
    </div>
  )
}