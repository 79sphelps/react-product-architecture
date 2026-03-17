/**
 * Responsibility:
 * Individual command entry.
 */

import type { Command } from "../types/commandTypes"

export function CommandItem({ command }: { command: Command }) {
  return (
    <button
      className="w-full text-left px-4 py-2 hover:bg-gray-100"
      onClick={command.run}
    >
      {command.label}
    </button>
  )
}