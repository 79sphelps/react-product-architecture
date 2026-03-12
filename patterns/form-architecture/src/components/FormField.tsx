/**
 * File: FormField.tsx
 *
 * Responsibility:
 * Provides a standardized wrapper around form inputs.
 *
 * Handles:
 * - label rendering
 * - field layout
 * - error display
 * - accessibility relationships
 *
 * Why it exists:
 * Centralizing field layout prevents duplication across
 * multiple input components and ensures consistent UX
 * and accessibility behavior.
 *
 * Why it lives here:
 * This component represents a reusable UI pattern shared
 * across all form inputs.
 *
 * Accessibility Behavior:
 * Associates labels and errors with inputs using
 * `htmlFor`, `aria-describedby`, and predictable IDs.
 *
 * Architectural Alignment:
 * - Composition Pattern
 * - Presentational Abstraction
 */

import type { ReactNode } from "react"
import { useFieldError } from "../hooks/useFieldError"
import { ErrorMessage } from "./ErrorMessage"

interface Props {
  name: string
  label: string
  children: ReactNode
}

export function FormField({ name, label, children }: Props) {
  const error = useFieldError(name)

  return (
    <div className="mb-4">

      <label
        htmlFor={name}
        className="block font-medium mb-1"
      >
        {label}
      </label>

      {children}

      <ErrorMessage
        name={name}
        message={error}
      />

    </div>
  )
}