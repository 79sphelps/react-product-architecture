import { render, screen, fireEvent } from "@testing-library/react"
import { ManualSyncControls } from "../../src/components/ManualSyncControls"

test("renders sync buttons", () => {
  render(<ManualSyncControls />)

  expect(screen.getByText(/Push/)).toBeInTheDocument()
  expect(screen.getByText(/Pull/)).toBeInTheDocument()
})