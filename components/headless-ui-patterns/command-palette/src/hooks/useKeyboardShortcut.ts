/**
 * Responsibility:
 * Handles global keyboard shortcuts safely.
 *
 * Improvements:
 * - Supports single key OR modifier combos
 * - Ignores inputs/textareas
 * - Normalizes key casing
 */

import { useEffect } from "react"

interface Options {
  requireMeta?: boolean
}

export function useKeyboardShortcut(
  key: string,
  callback: () => void,
  options: Options = {}
) {
  const { requireMeta = false } = options

  useEffect(() => {
    function handler(e: KeyboardEvent) {
      const target = e.target as HTMLElement

      // Ignore typing contexts
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return
      }

      const pressedKey = e.key.toLowerCase()
      const matchesKey = pressedKey === key.toLowerCase()
      const matchesMeta =
        !requireMeta || e.metaKey || e.ctrlKey

      if (matchesKey && matchesMeta) {
        e.preventDefault()
        callback()
      }
    }

    window.addEventListener("keydown", handler)

    return () =>
      window.removeEventListener("keydown", handler)
  }, [key, callback, requireMeta])
}