/**
 * Responsibility:
 * Shared types for virtualization system.
 *
 * Architectural Alignment:
 * - Type Safety
 * - Reusability
 */

export interface VirtualItem {
  index: number
  start: number
  size: number
  key: string
}

export interface VirtualGridConfig {
  rowHeight: number
  overscan?: number
}