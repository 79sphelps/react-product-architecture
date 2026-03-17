/**
 * Responsibility:
 * Visual indicator for sorting direction.
 *
 * Why it exists:
 * Keeps UI concerns separate from table logic.
 */

interface Props {
  active: boolean
  ascending: boolean
}

export function SortIndicator({ active, ascending }: Props) {
  if (!active) return <span className="ml-1 opacity-30">↕</span>

  return (
    <span className="ml-1">
      {ascending ? "↑" : "↓"}
    </span>
  )
}