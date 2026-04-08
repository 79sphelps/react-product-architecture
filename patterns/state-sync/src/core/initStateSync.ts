import { createSyncEngine } from "./createSyncEngine"
import { createURLAdapter } from "./urlAdapter"
import { store } from "../state"

let initialized = false

export function initStateSync() {
  if (initialized) return

  const engine = createSyncEngine(store, [
    createURLAdapter(),
  ])

  engine.syncFromAdapters()

  initialized = true
}