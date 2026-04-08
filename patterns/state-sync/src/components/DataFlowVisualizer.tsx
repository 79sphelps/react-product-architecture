import { useSyncedState } from "../hooks/useSyncedState"

export function DataFlowVisualizer() {
  const { state } = useSyncedState()

  return (
    <div className="p-4 border rounded bg-white shadow">
      <h2 className="text-sm font-semibold mb-3">
        Data Flow
      </h2>

      <div className="flex items-center justify-between text-sm">
        <div className="text-center">
          <div className="font-medium">UI Input</div>
          <div className="text-gray-500">{state.q || "—"}</div>
        </div>

        <div>→</div>

        <div className="text-center">
          <div className="font-medium">Store</div>
          <div className="text-gray-500">{state.q || "—"}</div>
        </div>

        <div>→</div>

        <div className="text-center">
          <div className="font-medium">URL</div>
          <div className="text-gray-500">
            {window.location.search || "—"}
          </div>
        </div>
      </div>
    </div>
  )
}