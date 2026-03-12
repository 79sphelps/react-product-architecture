/**
 * File: App.tsx
 *
 * Responsibility:
 * Root application component used to demonstrate
 * the schema-driven form architecture.
 *
 * Architectural Alignment:
 * - Application Composition
 */

import { UserRegistrationForm } from "./examples/UserRegistrationForm"

export default function App() {
  return (
    <div className="p-8">
      <UserRegistrationForm />
    </div>
  )
}