/**
 * Responsibility:
 * Calculates visible range.
 *
 * Architectural Alignment:
 * - Pure functions
 * - Deterministic logic
 */

export function getVisibleRange(
  scrollTop: number,
  containerHeight: number,
  rowHeight: number,
  total: number,
  overscan: number
) {

  const start = Math.floor(scrollTop / rowHeight)
  const visibleCount = Math.ceil(containerHeight / rowHeight)

  const from = Math.max(0, start - overscan)
  const to = Math.min(total, start + visibleCount + overscan)

  return { from, to }
}