/**
 * File: DynamicField.tsx
 *
 * Responsibility:
 * Renders form fields dynamically based on
 * configuration objects.
 *
 * Why it exists:
 * Enables configuration-driven form rendering
 * used in many production systems.
 *
 * Architectural Alignment:
 * - Factory Pattern
 * - Configuration Driven Rendering
 */

import type { FormFieldConfig } from "../types/formTypes"
import { InputField } from "./InputField"

interface Props {
  field: FormFieldConfig
}

export function DynamicField({ field }: Props) {

  switch (field.type) {

    case "email":
    case "password":
    case "tel":
    case "url":
    case "text":
      return (
        <InputField
          name={field.name}
          label={field.label}
          type={field.type}
          placeholder={field.placeholder}
        />
      )

    default:
      return null
  }
}