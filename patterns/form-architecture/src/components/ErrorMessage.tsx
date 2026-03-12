/**
 * File: ErrorMessage.tsx
 *
 * Responsibility:
 * Displays validation error messages associated
 * with form fields in an accessible way.
 *
 * Why it exists:
 * Centralizing error UI ensures consistent styling,
 * accessibility semantics, and screen-reader support
 * across all form inputs.
 *
 * Accessibility Behavior:
 * The error message is connected to its input field
 * via `aria-describedby` using a predictable ID.
 *
 * Example:
 * input -> aria-describedby="email-error"
 * error -> id="email-error"
 *
 * Architectural Alignment:
 * - Presentational Component
 * - Accessibility by Default
 */

interface Props {
  name: string
  message?: string
}

export function ErrorMessage({ name, message }: Props) {
  if (!message) return null

  return (
    <p
      id={`${name}-error`}
      className="text-red-500 text-sm mt-1"
      role="alert"
    >
      {message}
    </p>
  )
}