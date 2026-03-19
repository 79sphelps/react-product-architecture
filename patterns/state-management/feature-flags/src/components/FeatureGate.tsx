import { useFeatureFlag } from "../hooks/useFeatureFlag"
import type { FeatureFlagKey } from "../types/flagTypes"

export function FeatureGate({
  flag,
  fallback = null,
  children
}) {
  const enabled = useFeatureFlag(flag as FeatureFlagKey)
  return enabled ? children : fallback
}