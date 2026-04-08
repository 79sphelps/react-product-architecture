import { evaluateFlag } from "../../src/utils/evaluateFlag"

test("boolean flag", () => {
  expect(evaluateFlag(true)).toEqual({
    enabled: true,
    variant: "default",
  })
})