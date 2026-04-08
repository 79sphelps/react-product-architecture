import { createStateStore } from "../../src/core/createStateStore"

test("updates state", () => {
  const store = createStateStore({ a: 1 })

  store.setState({ a: 2 })

  expect(store.getState().a).toBe(2)
})