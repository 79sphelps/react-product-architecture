import { render, screen } from "@testing-library/react"
import { FeatureGate } from "../../src/components/FeatureGate"
import { featureFlagStore } from "../../src/core/createFeatureFlagStore"

test("renders gated content", () => {
  featureFlagStore.setFlags({ test: true })

  render(
    <FeatureGate flag="test">
      <p>Visible</p>
    </FeatureGate>
  )

  expect(screen.getByText("Visible")).toBeInTheDocument()
})