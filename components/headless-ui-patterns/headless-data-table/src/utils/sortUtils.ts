/**
 * Responsibility:
 * Pure sorting logic for table.
 *
 * Why it exists:
 * Keeps sorting out of React layer.
 *
 * Architectural Alignment:
 * - Separation of concerns
 * - Pure functions
 */

export function sortData<T>(
  data: T[],
  key: keyof T,
  ascending: boolean
): T[] {
  return [...data].sort((a, b) => {
    const aVal = a[key]
    const bVal = b[key]

    if (aVal < bVal) return ascending ? -1 : 1
    if (aVal > bVal) return ascending ? 1 : -1
    return 0
  })
}