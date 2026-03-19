import { renderHook } from "@testing-library/react"
import { FeatureFlagProvider } from "../../src/context/FeatureFlagProvider"
import { useFeatureFlag } from "../../src/hooks/useFeatureFlag"

test("returns flag value", () => {
  const wrapper = ({ children }) => (
    <FeatureFlagProvider>{children}</FeatureFlagProvider>
  )

  const { result } = renderHook(
    () => useFeatureFlag("newDashboard"),
    { wrapper }
  )

  expect(result.current).toBe(false)
})