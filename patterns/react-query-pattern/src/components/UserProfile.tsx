/**
 * Responsibility:
 * Renders user profile UI and allows editing.
 *
 * Architectural Alignment:
 * - Presentational Component
 * - Hook-driven data access
 */

import { useState } from "react"
import { useUserQuery } from "../hooks/useUserQuery"
import { useUpdateUserMutation } from "../hooks/useUpdateUserMutation"

export function UserProfile() {
  const { data, isLoading } = useUserQuery()
  const mutation = useUpdateUserMutation()

  const [name, setName] = useState("")

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No user</p>

  const handleSave = () => {
    mutation.mutate({ name })
  }

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">User Profile</h1>
      <p>Email: {data.email}</p>

      <input
        className="border p-2"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={data.name}
      />

      <button
        className="bg-blue-500 text-white px-3 py-2"
        onClick={handleSave}
      >
        Save
      </button>

      {mutation.isSuccess && <p>Saved!</p>}
    </div>
  )
}