/**
 * Responsibility:
 * Defines the configuration used to dynamically
 * render fields for the User Registration form.
 *
 * Why it exists:
 * Instead of hardcoding fields in JSX, we use
 * configuration-driven rendering. This pattern
 * allows forms to scale and enables dynamic
 * form generation in complex systems.
 *
 * Architectural Alignment:
 * - Configuration Driven UI
 * - Separation of Data and Rendering
 */

import type { FormFieldConfig } from "../types/formTypes"

export const userFormFields: FormFieldConfig[] = [
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email"
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter password"
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel"
  },
  {
    name: "website",
    label: "Website",
    type: "url"
  }
]