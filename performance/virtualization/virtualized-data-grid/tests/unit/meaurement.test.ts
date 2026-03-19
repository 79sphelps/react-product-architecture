import { getVisibleRange } from "../../src/utils/measurement"

test("calculates visible range", () => {
  const result = getVisibleRange(0, 400, 40, 1000, 5)

  expect(result.from).toBe(0)
  expect(result.to).toBeGreaterThan(0)
})