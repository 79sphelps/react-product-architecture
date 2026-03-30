import { normalizeError } from "../../src/utils/normalizeError"

test("handles Error object", () => {
  const err = normalizeError(new Error("fail"))
  expect(err.message).toBe("fail")
})

test("handles string", () => {
  const err = normalizeError("fail")
  expect(err.message).toBe("fail")
})