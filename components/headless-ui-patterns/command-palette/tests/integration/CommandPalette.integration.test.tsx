import { render, screen } from "@testing-library/react"
import { CommandPalette } from "../../src/components/CommandPalette"

const commands = [
  { id:"1", label:"Test", run: () => {} }
]

test("renders command", () => {
  render(<CommandPalette commands={commands}/>)
  expect(screen.getByText("Test")).toBeInTheDocument()
})