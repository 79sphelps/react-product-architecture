/**
 * Responsibility:
 * Renders different UI based on flag combinations.
 *
 * Architectural Alignment:
 * - State-driven UI composition
 * - Feature isolation
 */

import { useContext } from "react"
import { FeatureFlagContext } from "../context/FeatureFlagProvider"

export function DynamicFeatureView() {

  const ctx = useContext(FeatureFlagContext)
  if (!ctx) return null

  const { flags } = ctx

  const { newDashboard, betaFeature, adminPanel } = flags

  // 🧠 Combination logic
  if (newDashboard && betaFeature) {
    return (
      <div className="p-4 bg-green-100 border rounded">
        <h2 className="font-bold">🚀 Advanced Dashboard</h2>
        <button className="mt-2 px-3 py-1 bg-green-500 text-white rounded">
          AI Insights
        </button>
      </div>
    )
  }

  if (newDashboard) {
    return (
      <div className="p-4 bg-blue-100 border rounded">
        <h2 className="font-bold">📊 New Dashboard</h2>
        <button className="mt-2 px-3 py-1 bg-blue-500 text-white rounded">
          Refresh Data
        </button>
      </div>
    )
  }

  if (betaFeature) {
    return (
      <div className="p-4 bg-yellow-100 border rounded">
        <h2 className="font-bold">🧪 Experimental UI</h2>
        <button className="mt-2 px-3 py-1 bg-yellow-500 text-white rounded">
          Run Experiment
        </button>
      </div>
    )
  }

  return (
    <div className="p-4 bg-gray-100 border rounded">
      <h2 className="font-bold">Legacy Dashboard</h2>
      <button className="mt-2 px-3 py-1 bg-gray-500 text-white rounded">
        Load Data
      </button>
    </div>
  )
}