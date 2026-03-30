import { render, screen, fireEvent } from "@testing-library/react"
import { FormExample } from "../../src/examples/FormExample"

test("shows field error", () => {
  render(<FormExample />)

  fireEvent.click(screen.getByText("Submit"))

  expect(screen.getByText("Invalid email")).toBeInTheDocument()
})