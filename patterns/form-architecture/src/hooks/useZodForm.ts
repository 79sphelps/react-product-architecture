/**
 * Responsibility:
 * Connects React Hook Form with Zod validation to provide
 * schema-driven validation within the form architecture.
 *
 * Why it exists:
 * React Hook Form does not natively enforce schema validation.
 * This hook integrates Zod schemas into the form lifecycle.
 *
 * Why it lives here:
 * Hooks represent behavioral logic and should be separated
 * from presentational components.
 *
 * Architectural Alignment:
 * - Custom Hook Pattern
 * - Separation of Concerns
 */

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ZodType } from "zod"

export function useZodForm<T>(schema: ZodType<T>) {
  return useForm<T>({
    resolver: zodResolver(schema),
    mode: "onBlur"
  })
}