/**
 * Responsibility:
 * Source of truth for default flags.
 *
 * Architectural Alignment:
 * - Central configuration
 */

import type { FeatureFlags } from "../types/flagTypes"

export const defaultFlags: FeatureFlags = {
  newDashboard: false,
  betaFeature: false,
  adminPanel: false
}