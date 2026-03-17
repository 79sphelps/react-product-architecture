/**
 * Responsibility:
 * Root palette container.
 */

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { CommandInput } from "./CommandInput"
import { CommandList } from "./CommandList"
import { fuzzySearch } from "../utils/fuzzySearch"
import { useCommandPalette } from "../hooks/useCommandPalette"
import type { Command } from "../types/commandTypes"

export function CommandPalette({ commands }: { commands: Command[] }) {
  const { open, setOpen } = useCommandPalette()

  const [query, setQuery] = useState("")
  const [activeIndex, setActiveIndex] = useState(0)

  const results = fuzzySearch(commands, query)

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false)

      if (e.key === "ArrowDown") {
        setActiveIndex(i => Math.min(i + 1, results.length - 1))
      }

      if (e.key === "ArrowUp") {
        setActiveIndex(i => Math.max(i - 1, 0))
      }

      if (e.key === "Enter") {
        results[activeIndex]?.run()
        setOpen(false)
      }
    }

    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [results, activeIndex])

  if (!open) return null

  return createPortal(
    <div className="fixed inset-0 bg-black/30 flex justify-center pt-40">
      <div className="bg-white w-96 rounded shadow">
        <CommandInput value={query} onChange={setQuery} />
        <CommandList
          commands={results}
          activeIndex={activeIndex}
        />
      </div>
    </div>,
    document.body
  )
}