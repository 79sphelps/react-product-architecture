import { useContext } from "react"
import { FeatureFlagContext } from "../context/FeatureFlagProvider"
import type { FeatureFlagKey } from "../types/flagTypes"

export function useFeatureFlag(key: FeatureFlagKey): boolean {

  const ctx = useContext(FeatureFlagContext)

  if (!ctx) {
    throw new Error("FeatureFlagProvider missing")
  }

  return ctx.flags[key]
}