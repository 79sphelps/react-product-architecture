/**
 * File: useFieldError.ts
 *
 * Responsibility:
 * Provides a reusable abstraction for retrieving
 * field-level validation errors from React Hook Form.
 *
 * Why it exists:
 * Directly accessing formState.errors inside UI components
 * tightly couples components to the form library.
 *
 * This hook creates a stable interface for retrieving
 * field errors, improving separation of concerns.
 *
 * Why it lives here:
 * Hooks contain reusable behavior that can be shared
 * across multiple components.
 *
 * Architectural Alignment:
 * - Custom Hook Pattern
 * - Separation of Concerns
 * - Dependency Abstraction
 */

import { useFormContext } from "react-hook-form"

export function useFieldError(name: string) {
  const {
    formState: { errors }
  } = useFormContext()

  return errors[name]?.message as string | undefined
}