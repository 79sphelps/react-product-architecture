/**
 * Responsibility:
 * Virtualization engine.
 *
 * Architectural Alignment:
 * - Encapsulation
 * - Separation of concerns
 */

import { useRef, useState, useEffect } from "react"
import { getVisibleRange } from "../utils/measurement"
import type { VirtualItem, VirtualGridConfig } from "../types/gridTypes"

export function useVirtualGrid(
  count: number,
  config: VirtualGridConfig
) {

  const { rowHeight, overscan = 5 } = config

  const parentRef = useRef<HTMLDivElement | null>(null)

  const [scrollTop, setScrollTop] = useState(0)
  const [height, setHeight] = useState(0)

  useEffect(() => {

    const el = parentRef.current
    if (!el) return

    function onScroll() {
      setScrollTop(el.scrollTop)
    }

    function measure() {
      setHeight(el.clientHeight)
    }

    measure()
    el.addEventListener("scroll", onScroll)
    window.addEventListener("resize", measure)

    return () => {
      el.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", measure)
    }

  }, [])

  const { from, to } = getVisibleRange(
    scrollTop,
    height,
    rowHeight,
    count,
    overscan
  )

  const items: VirtualItem[] = []

  for (let i = from; i < to; i++) {
    items.push({
      index: i,
      start: i * rowHeight,
      size: rowHeight,
      key: `row-${i}`
    })
  }

  return {
    parentRef,
    items,
    totalHeight: count * rowHeight
  }
}