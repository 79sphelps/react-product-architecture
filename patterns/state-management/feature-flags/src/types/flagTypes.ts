/**
 * Responsibility:
 * Defines feature flag contract.
 *
 * Architectural Alignment:
 * - Type safety
 * - Explicit contracts
 */

export type FeatureFlags = {
  newDashboard: boolean
  betaFeature: boolean
  adminPanel: boolean
}

export type FeatureFlagKey = keyof FeatureFlags