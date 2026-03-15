/**
 * Responsibility:
 * Normalizes Zod validation errors into a predictable
 * key/value structure usable by UI components.
 *
 * Why it exists:
 * Zod's error structure is nested and not ideal for
 * direct UI consumption. This utility converts errors
 * into a simple object keyed by field name.
 *
 * Why it lives here:
 * This utility is reusable across multiple forms and
 * should eventually be extracted into the repository's
 * shared utility layer.
 *
 * Architectural Alignment:
 * - Adapter Pattern
 * - Error Normalization
 */

import { ZodError } from "zod"

export function mapZodErrors(error: ZodError) {
  const fieldErrors: Record<string, string> = {}

  error.errors.forEach((err) => {
    const field = err.path[0] as string

    fieldErrors[field] = err.message
  })

  return fieldErrors
}