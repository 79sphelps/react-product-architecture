/**
 * Responsibility:
 * Renders virtualized list.
 *
 * Architectural Alignment:
 * - Composition
 * - Performance optimization
 */

import { useVirtualGrid } from "../hooks/useVirtualGrid"
import { GridRow } from "./GridRow"

interface Props<T> {
  data: T[]
  rowHeight?: number
  loading?: boolean
}

export function VirtualizedGrid<T>({
  data,
  rowHeight = 40,
  loading = false
}: Props<T>) {

  const { parentRef, items, totalHeight } =
    useVirtualGrid(data.length, { rowHeight })

  if (loading) return <div>Loading...</div>

  if (!data.length) return <div>No data</div>

  return (

    <div
      ref={parentRef}
      className="h-[400px] overflow-auto border relative"
      role="grid"
    >

      <div
        style={{ height: totalHeight, position: "relative" }}
      >

        {items.map(v => (

          <div
            key={v.key}
            role="row"
            style={{
              position: "absolute",
              top: 0,
              transform: `translateY(${v.start}px)`
            }}
            className="w-full h-[40px] border-b"
          >
            <GridRow item={data[v.index]} />
          </div>

        ))}

      </div>

    </div>
  )
}