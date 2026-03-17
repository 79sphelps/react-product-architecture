import { useState } from "react"
import { sortData } from "../utils/sortUtils"

export function useTable<T>(data: T[]) {
  const [sortKey, setSortKey] = useState<keyof T | null>(null)
  const [ascending, setAscending] = useState(true)

  function handleSort(key: keyof T) {
    if (sortKey === key) {
      setAscending(prev => !prev)
    } else {
      setSortKey(key)
      setAscending(true)
    }
  }

  const sortedData =
    sortKey
      ? sortData(data, sortKey, ascending)
      : data

  return {
    data: sortedData,
    handleSort,
    sortKey,
    ascending
  }
}