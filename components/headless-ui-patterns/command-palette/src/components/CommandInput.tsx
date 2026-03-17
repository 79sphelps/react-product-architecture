/**
 * Responsibility:
 * Search input for command palette.
 */

import { useEffect, useRef } from "react"

interface Props {
  value: string
  onChange: (v: string) => void
}

export function CommandInput({ value, onChange }: Props) {
  const ref = useRef<HTMLInputElement>(null)

  useEffect(() => {
    ref.current?.focus()
  }, [])

  return (
    <input
      ref={ref}
      className="w-full p-3 border-b"
      placeholder="Type a command..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  )
}