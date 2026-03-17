import type { Column } from "../types/tabletypes"
import { useTable } from "../hooks/useTable"
import { SortIndicator } from "./SortIndicator"

interface Props<T> {
  columns: Column<T>[]
  data: T[]
  // Controlled sorting support
  sortKey?: keyof T
  ascending?: boolean
  onSortChange?: (key: keyof T) => void
}

export function DataTable<T>({
  columns,
  data,
  sortKey: controlledKey,
  ascending: controlledAsc,
  onSortChange
}: Props<T>) {

  const internal = useTable(data)

  const sortKey = controlledKey ?? internal.sortKey
  const ascending = controlledAsc ?? internal.ascending

  function handleSort(key: keyof T) {

    if (onSortChange) {
      onSortChange(key)
    } else {
      internal.handleSort(key)
    }
  }

  const rows = controlledKey
    ? data // assume externally sorted
    : internal.data

  if (!data.length) {
    return <div>No data available</div>
  }

  return (
    <table className="w-full border">
      <thead>
        <tr>
          {columns.map(col => {
            const isSorted = sortKey === col.key
            return (
              <th
                key={String(col.key)}
                scope="col"
                className={`p-2 border ${
                  col.sortable
                    ? "cursor-pointer hover:bg-gray-100"
                    : ""
                }`}
                onClick={() =>
                  col.sortable && handleSort(col.key)
                }
                aria-sort={
                  isSorted
                    ? (ascending ? "ascending" : "descending")
                    : "none"
                }
              >
                <div className="flex items-center">
                  {col.header}
                  {col.sortable && (
                    <SortIndicator
                      active={isSorted}
                      ascending={ascending}
                    />
                  )}
                </div>
              </th>
            )
          })}
        </tr>
      </thead>

      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {columns.map(col => (
              <td key={String(col.key)} className="p-2 border">
                {col.render
                  ? col.render(row[col.key], row)
                  : String(row[col.key])
                }
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}