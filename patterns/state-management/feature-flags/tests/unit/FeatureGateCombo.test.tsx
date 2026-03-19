import { render } from "@testing-library/react"
import { FeatureFlagProvider } from "../../src/context/FeatureFlagProvider"
import { FeatureGateCombo } from "../../src/components/FeatureGateCombo"

test("renders only when all flags enabled", () => {

  const { queryByText } = render(
    <FeatureFlagProvider>
      <FeatureGateCombo flags={["newDashboard", "betaFeature"]}>
        <div>Advanced</div>
      </FeatureGateCombo>
    </FeatureFlagProvider>
  )

  expect(queryByText("Advanced")).not.toBeInTheDocument()
})