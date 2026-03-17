/**
 * Responsibility:
 * Consumes command palette context.
 */

import { useContext } from "react"
import { CommandPaletteContext } from "../context/CommandPaletteContext"

export function useCommandPalette() {
  const ctx = useContext(CommandPaletteContext)

  if (!ctx) {
    throw new Error("Must be used inside provider")
  }

  return ctx
}