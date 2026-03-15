/**
 * Responsibility:
 * Provides a reusable text input integrated
 * with the schema-driven form architecture.
 *
 * Why it exists:
 * Abstracts repetitive input wiring with
 * React Hook Form while delegating layout
 * and error handling to FormField.
 *
 * Accessibility Behavior:
 * - `aria-invalid` indicates validation failure
 * - `aria-describedby` links input to error message
 *
 * Architectural Alignment:
 * - Component Composition
 * - Separation of Concerns
 */

import { useFormContext } from "react-hook-form"
import { FormField } from "./FormField"
import { useFieldError } from "../hooks/useFieldError"

interface Props {
  name: string
  label: string
  type?: string
  placeholder?: string
}

export function InputField({
  name,
  label,
  type = "text",
  placeholder
}: Props) {

  const { register } = useFormContext()

  const error = useFieldError(name)

  return (
    <FormField name={name} label={label}>

      <input
        id={name}
        {...register(name)}
        type={type}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-black"
      />

    </FormField>
  )
}