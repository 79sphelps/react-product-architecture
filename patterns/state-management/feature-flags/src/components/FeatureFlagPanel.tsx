/**
 * Responsibility:
 * Accessible feature toggle UI.
 */

import { useContext } from "react"
import { FeatureFlagContext } from "../context/FeatureFlagProvider"

export function FeatureFlagPanel() {

  const ctx = useContext(FeatureFlagContext)
  if (!ctx) return null

  const { flags, toggleFlag } = ctx

  return (
    <fieldset className="p-4 border mb-4">
      <legend className="font-bold mb-2">Feature Flags</legend>

      {Object.entries(flags).map(([key, value]) => {

        const id = `flag-${key}`

        return (
          <div key={key} className="flex items-center mb-2">

            <input
              id={id}
              type="checkbox"
              checked={value}
              onChange={() => toggleFlag(key as any)}
              aria-checked={value}
            />

            <label htmlFor={id} className="ml-2 cursor-pointer">
              {key}
            </label>

          </div>
        )
      })}
    </fieldset>
  )
}