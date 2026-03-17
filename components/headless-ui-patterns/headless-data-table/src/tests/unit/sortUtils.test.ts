import { sortData } from "../../utils/sortUtils"

test("sorts ascending", () => {
  const data = [{ v: 2 }, { v: 1 }]
  const result = sortData(data, "v", true)

  expect(result[0].v).toBe(1)
})