/**
 * Responsibility:
 * Global command palette state.
 *
 * Architectural Alignment:
 * - centralized state
 * - decoupled UI and logic
 */

import { createContext, useState } from "react"

export const CommandPaletteContext = createContext(null)

export function CommandPaletteProvider({ children }) {
  const [open, setOpen] = useState(false)
  
  return (
    <CommandPaletteContext.Provider
      value={{ open, setOpen }}
    >
      {children}
    </CommandPaletteContext.Provider>
  )
}