import { useState } from "react"
import { useFormErrors } from "../hooks/useFormErrors"
import { FieldError } from "../components/FieldError"

export function FormExample() {
  const [email, setEmail] = useState("")
  const { errors, setFieldError, clearErrors } = useFormErrors()

  function handleSubmit() {
    clearErrors()

    if (!email.includes("@")) {
      setFieldError("email", "Invalid email")
    }
  }

  return (
    <div className="space-y-2">
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2"
      />

      <FieldError message={errors.email} />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}