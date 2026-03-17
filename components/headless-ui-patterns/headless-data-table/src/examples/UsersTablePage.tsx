/**
 * Responsibility:
 * Demonstrates table functionality clearly.
 */

import { useState } from "react"
import { DataTable } from "../components/DataTable"
import { users } from "../data/users"

export function UsersTablePage() {
  const [sortKey, setSortKey] = useState<"name" | "age">("name")
  const [ascending, setAscending] = useState(true)

  function handleSort(key: "name" | "age") {
    if (key === sortKey) {
      setAscending(prev => !prev)
    } else {
      setSortKey(key)
      setAscending(true)
    }
  }

  const sorted = [...users].sort((a, b) => {
    const aVal = a[sortKey]
    const bVal = b[sortKey]

    if (aVal < bVal) return ascending ? -1 : 1
    if (aVal > bVal) return ascending ? 1 : -1
    return 0
  })

  const columns = [
    { key: "name", header: "Name", sortable: true },
    { key: "age", header: "Age", sortable: true }
  ]

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">
        Users Table (Controlled Sorting)
      </h1>

      <DataTable
        columns={columns}
        data={sorted}
        sortKey={sortKey}
        ascending={ascending}
        onSortChange={handleSort}
      />
    </div>
  )
}