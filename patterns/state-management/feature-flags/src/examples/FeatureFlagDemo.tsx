import { FeatureFlagProvider } from "../context/FeatureFlagProvider"
import { FeatureFlagPanel } from "../components/FeatureFlagPanel"
import { DynamicFeatureView } from "../components/DynamicFeatureView"
import { FeatureGate } from "../components/FeatureGate"

function Content() {
  return (
    <div className="p-6 space-y-4">
      <FeatureFlagPanel />
      <DynamicFeatureView />
      <FeatureGate flag="adminPanel">
        <div className="p-4 border bg-red-100 rounded">
          🔒 Admin Panel Enabled
        </div>
      </FeatureGate>
    </div>
  )
}

export function FeatureFlagDemo() {
  return (
    <FeatureFlagProvider>
      <Content />
    </FeatureFlagProvider>
  )
}