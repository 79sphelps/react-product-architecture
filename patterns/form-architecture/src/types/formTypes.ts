/**
 * File: formTypes.ts
 *
 * Responsibility:
 * Defines the core TypeScript contracts used by the schema-driven
 * form architecture. These types ensure consistency between:
 *
 * - Zod schemas
 * - React Hook Form
 * - UI field components
 *
 * Why it exists:
 * Strong typing across form schemas, fields, and components ensures
 * predictable form behavior and prevents mismatches between the
 * validation schema and rendered fields.
 *
 * Why it lives here:
 * This file is placed in the `types` layer because it defines shared
 * contracts used by multiple layers of the form system including:
 *
 * - hooks
 * - components
 * - schema definitions
 *
 * Architectural Alignment:
 * - Separation of Concerns
 * - Type Safety
 * - Schema-Driven Architecture
 */

export type FieldType =
  | "text"
  | "email"
  | "password"
  | "tel"
  | "url"

export interface FormFieldConfig {
  name: string
  label: string
  type: FieldType
  placeholder?: string
}