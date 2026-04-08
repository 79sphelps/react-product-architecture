import { createSyncEngine } from "../../src/core/createSyncEngine"

test("syncs state to adapter", () => {
  const write = jest.fn()
  const read = jest.fn(() => ({ q: "hello" }))

  const adapter = { read, write }

  const store = {
    getState: () => ({ q: "" }),
    setState: jest.fn(),
    subscribe: (fn: any) => {
      fn({ q: "test" })
      return () => {}
    },
  }

  const engine = createSyncEngine(store as any, [adapter])

  engine.syncFromAdapters()

  expect(store.setState).toHaveBeenCalledWith({ q: "hello" })
})