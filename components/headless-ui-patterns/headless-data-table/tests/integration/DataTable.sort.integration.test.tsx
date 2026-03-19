import { render, screen, fireEvent } from "@testing-library/react"
import { DataTable } from "../../src/components/DataTable"

const data = [
  { name: "B", age: 30 },
  { name: "A", age: 20 }
]

const columns = [
  { key: "name", header: "Name", sortable: true }
]

test("sorts when header clicked", () => {
  render(
    <DataTable columns={columns} data={data} />
  )

  const header = screen.getByText("Name")
  fireEvent.click(header)
  const rows = screen.getAllByRole("row")

  expect(rows[1]).toHaveTextContent("A")
})