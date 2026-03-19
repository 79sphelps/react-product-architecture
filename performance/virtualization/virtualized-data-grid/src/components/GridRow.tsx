/**
 * Responsibility:
 * Renders a single virtual row.
 *
 * Architectural Alignment:
 * - SRP
 * - Reusability
 */

interface Props<T> {
  item: T
}

export function GridRow<T>({ item }: Props<T>) {
  return (
    <div className="px-2">
      {JSON.stringify(item)}
    </div>
  )
}