/**
 * Responsibility:
 * Demonstrates the full schema-driven,
 * configuration-driven form architecture.
 *
 * Architectural Alignment:
 * - Schema Driven Validation
 * - Config Driven Rendering
 */

import { useZodForm } from "../hooks/useZodForm"
import { FormProvider } from "../components/FormProvider"
import { userFormSchema, type UserFormData } from "../schemas/userFormSchema"
import { userFormFields } from "../config/userFormFields"
import { DynamicField } from "../components/DynamicField"

export function UserRegistrationForm() {

  const methods = useZodForm<UserFormData>(userFormSchema)

  const onSubmit = (data: UserFormData) => {
    console.log("Submitted:", data)
  }

  return (
    <FormProvider methods={methods}>

      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="max-w-md mx-auto mt-10"
      >

        {userFormFields.map((field) => (
          <DynamicField
            key={field.name}
            field={field}
          />
        ))}

        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded mt-4"
        >
          Submit
        </button>

      </form>

    </FormProvider>
  )
}