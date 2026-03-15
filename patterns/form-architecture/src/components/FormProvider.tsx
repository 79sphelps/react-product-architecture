/**
 * Responsibility:
 * Provides form context to nested form field components.
 *
 * Why it exists:
 * React Hook Form uses context to allow nested fields
 * to access form state without prop drilling.
 *
 * Why it lives here:
 * This abstraction centralizes form setup logic and
 * ensures consistency across form implementations.
 *
 * Architectural Alignment:
 * - Context Provider Pattern
 * - Dependency Injection
 */

import { FormProvider as RHFProvider } from "react-hook-form"
import type { ReactNode } from "react"
import type { UseFormReturn } from "react-hook-form"

interface Props<T> {
  methods: UseFormReturn<T>
  children: ReactNode
}

export function FormProvider<T>({ methods, children }: Props<T>) {
  return <RHFProvider {...methods}>{children}</RHFProvider>
}