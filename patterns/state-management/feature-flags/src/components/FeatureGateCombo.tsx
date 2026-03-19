/**
 * Responsibility:
 * Supports rendering based on multiple feature flags.
 *
 * Architectural Alignment:
 * - Composable gating
 * - Scalable feature logic
 */

import { useContext } from "react"
import { FeatureFlagContext } from "../context/FeatureFlagProvider"
import type { FeatureFlagKey } from "../types/flagTypes"

type Props = {
  flags: FeatureFlagKey[]
  requireAll?: boolean
  children: React.ReactNode
  fallback?: React.ReactNode
}

export function FeatureGateCombo({
  flags,
  requireAll = true,
  children,
  fallback = null
}: Props) {
  const ctx = useContext(FeatureFlagContext)
  if (!ctx) return null

  const { flags: currentFlags } = ctx

  const enabled = requireAll
    ? flags.every(f => currentFlags[f])
    : flags.some(f => currentFlags[f])

  return enabled ? children : fallback
}