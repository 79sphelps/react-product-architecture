import { render, screen } from "@testing-library/react"
import { FeatureFlagProvider } from "../../src/context/FeatureFlagProvider"
import { FeatureGate } from "../../src/components/FeatureGate"

test("renders gated content", () => {

  render(
    <FeatureFlagProvider>
      <FeatureGate flag="newDashboard">
        <div>Visible</div>
      </FeatureGate>
    </FeatureFlagProvider>
  )

  expect(screen.queryByText("Visible")).not.toBeInTheDocument()
})