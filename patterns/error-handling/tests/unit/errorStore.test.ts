import { createErrorStore } from "../../src/core/createErrorStore"

describe("errorStore", () => {
  test("sets and gets error", () => {
    const store = createErrorStore()

    store.setError({ message: "fail" })

    expect(store.getError()).toEqual({ message: "fail" })
  })

  test("notifies subscribers", () => {
    const store = createErrorStore()

    const listener = vi.fn()

    store.subscribe(listener)

    store.setError({ message: "boom" })

    expect(listener).toHaveBeenCalledWith({ message: "boom" })
  })

  test("unsubscribe works correctly", () => {
    const store = createErrorStore()

    const listener = vi.fn()

    const unsubscribe = store.subscribe(listener)

    unsubscribe()

    store.setError({ message: "fail" })

    expect(listener).not.toHaveBeenCalled()
  })

  test("handles clearing error", () => {
    const store = createErrorStore()

    store.setError({ message: "fail" })
    store.setError(null)

    expect(store.getError()).toBeNull()
  })
})