import type { SyncAdapter } from "./types"
import { shallowEqual } from "../utils/shallowEqual"

export function createSyncEngine(
  store: any,
  adapters: SyncAdapter[]
) {
  let isSyncing = false

  function syncFromAdapters() {
    if (isSyncing) return
    isSyncing = true

    adapters.forEach((adapter) => {
      const next = adapter.read()

      if (!shallowEqual(store.getState(), next)) {
        store.setState(next)
      }
    })

    isSyncing = false
  }

  function syncToAdapters(state: any) {
    if (isSyncing) return
    isSyncing = true

    adapters.forEach((adapter) => {
      adapter.write(state)
    })

    isSyncing = false
  }

  const unsubscribe = store.subscribe(syncToAdapters)

  window.addEventListener("popstate", syncFromAdapters)

  return {
    syncFromAdapters,
    cleanup() {
      unsubscribe()
      window.removeEventListener("popstate", syncFromAdapters)
    },
  }
}