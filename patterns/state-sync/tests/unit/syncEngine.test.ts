import { createStateStore } from "../../src/core/createStateStore"
import { createSyncEngine } from "../../src/core/createSyncEngine"

test("syncs from adapter to store", () => {
  const store = createStateStore({})

  const adapter = {
    read: () => ({ q: "hello" }),
    write: jest.fn(),
  }

  const engine = createSyncEngine(store, [adapter])

  engine.syncFromAdapters()

  expect(store.getState().q).toBe("hello")
})