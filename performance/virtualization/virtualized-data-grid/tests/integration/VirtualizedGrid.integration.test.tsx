import { render, screen } from "@testing-library/react"
import { VirtualizedGrid } from "../../src/components/VirtualizedGrid"

test("renders grid", () => {
  render(<VirtualizedGrid rows={[{ name: "A" }]} />)
})

test("renders visible rows only", () => {

  const data = Array.from({ length: 1000 }, (_, i) => ({
    name: `Row ${i}`
  }))

  render(<VirtualizedGrid data={data} />)

  const rows = screen.getAllByRole("row")

  expect(rows.length).toBeLessThan(1000)
})