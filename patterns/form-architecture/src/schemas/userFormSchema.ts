/**
 * Responsibility:
 * Defines the validation schema used by the schema-driven form system.
 *
 * Why it exists:
 * The schema acts as the single source of truth for form validation.
 * It ensures consistent validation rules across:
 *
 * - UI validation
 * - server requests
 * - testing
 *
 * Why it lives here:
 * Schemas are isolated to allow reuse across:
 *
 * - client forms
 * - server validation
 * - integration tests
 *
 * Architectural Alignment:
 * - Schema-Driven Development
 * - Single Source of Truth
 */

import { z } from "zod"

export const userFormSchema = z.object({
  email: z
    .string()
    .email("Invalid email address"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters"),

  phone: z
    .string()
    .regex(/^\d{10}$/, "Phone must be 10 digits"),

  website: z
    .string()
    .url("Invalid URL")
    .optional()
})

export type UserFormData = z.infer<typeof userFormSchema>