/**
 * Pattern: Field-Level Error Management
 *
 * Why:
 * - Enables granular validation feedback
 * - Prevents overloading global error state
 * - Improves UX clarity
 *
 * Data Flow:
 * validation → setFieldError → state → UI
 */

import { useState } from "react"
import type { AppError } from "../core/errorTypes"

export function useFormErrors() {
  const [errors, setErrors] = useState<Record<string, string>>({})

  function setFieldError(field: string, message: string) {
    setErrors((prev) => ({ ...prev, [field]: message }))
  }

  function clearErrors() {
    setErrors({})
  }

  function setFormError(error: AppError) {
    if (error.field) {
      setFieldError(error.field, error.message)
    }
  }

  return {
    errors,
    setFieldError,
    clearErrors,
    setFormError,
  }
}