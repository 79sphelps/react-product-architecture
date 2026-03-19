import { render, screen } from "@testing-library/react"
import { FeatureFlagProvider } from "../../src/context/FeatureFlagProvider"
import { DynamicFeatureView } from "../../src/components/DynamicFeatureView"

test("shows legacy UI by default", () => {

  render(
    <FeatureFlagProvider>
      <DynamicFeatureView />
    </FeatureFlagProvider>
  )

  expect(screen.getByText("Legacy Dashboard")).toBeInTheDocument()
})