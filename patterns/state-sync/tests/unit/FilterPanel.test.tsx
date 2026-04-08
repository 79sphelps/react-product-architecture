import { render, screen, fireEvent } from "@testing-library/react"
import { FilterPanel } from "../../src/components/FilterPanel"

test("updates input value", () => {
  render(<FilterPanel />)

  const input = screen.getByRole("textbox")

  fireEvent.change(input, {
    target: { value: "react" },
  })

  expect(input).toBeInTheDocument()
})