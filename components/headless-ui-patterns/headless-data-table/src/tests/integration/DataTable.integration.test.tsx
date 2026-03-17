import { render, screen } from "@testing-library/react"
import { DataTable } from "../../components/DataTable"

const columns = [
  { key: "name", header: "Name" }
]

const data = [
  { name: "Alice" }
]

test("renders table data", () => {
  render(
    <DataTable columns={columns} data={data} />
  )

  expect(screen.getByText("Alice")).toBeInTheDocument()
})