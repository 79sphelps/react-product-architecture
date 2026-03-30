/**
 * Responsibility:
 * Normalize unknown errors into AppError
 * 
 * Pattern: Error Normalization
 *
 * Why:
 * - Ensures all errors conform to a predictable structure
 * - Prevents UI crashes from unknown error shapes
 * - Enables consistent logging + debugging
 *
 * Data Flow:
 * Unknown error → normalizeError → AppError → consumer
 */

import type { AppError } from "../core/errorTypes"

export function normalizeError(error: unknown): AppError {
  if (error instanceof Error) {
    return { message: error.message }
  }

  if (typeof error === "string") {
    return { message: error }
  }

  return { message: "Unknown error" }
}