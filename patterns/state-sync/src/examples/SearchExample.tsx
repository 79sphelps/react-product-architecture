import { useEffect } from "react"
import { initStateSync } from "../core/initStateSync"
import { FilterPanel } from "../components/FilterPanel"
import { SyncDevPanel } from "../components/SyncDevPanel"
import { SyncStatus } from "../components/SyncStatus"
import { DataFlowVisualizer } from "../components/DataFlowVisualizer"
import { URLStatePanel } from "../components/URLStatePanel"
import { StatePanel } from "../components/StatePanel"
import { EventLog } from "../components/EventLog"
import { ManualSyncControls } from "../components/ManualSyncControls"

export function SearchExample() {
  useEffect(() => {
    initStateSync()
  }, [])

  return (
    <div className="p-6 space-y-6 bg-gray-50 min-h-screen">
      <h1 className="text-xl font-bold">
        State Sync Architecture (UI ↔ Store ↔ URL)
      </h1>

      <SyncStatus />

      <FilterPanel />

      <ManualSyncControls />

      <DataFlowVisualizer />

      <div className="grid grid-cols-3 gap-4">
        <StatePanel />
        <URLStatePanel />
        <EventLog />
      </div>

      <SyncDevPanel />
    </div>
  )
}