/**
 * Responsibility:
 * Defines the core command palette action contract.
 *
 * Why it exists:
 * Ensures command registry is type safe.
 *
 * Architectural Alignment:
 * - Type-safe action registry
 * - Plugin architecture
 */

export interface Command {
  id: string
  label: string
  shortcut?: string
  run: () => void
}