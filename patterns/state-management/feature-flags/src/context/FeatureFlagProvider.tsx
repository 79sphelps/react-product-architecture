/**
 * Responsibility:
 * Manages feature flag state.
 *
 * Architectural Alignment:
 * - Centralized state
 * - Persistence layer
 */

import { createContext, useState, useEffect } from "react"
import type { FeatureFlags, FeatureFlagKey } from "../types/flagTypes"
import { defaultFlags } from "../config/flagRegistry"
import { loadFlags, saveFlags } from "../utils/storage"

export const FeatureFlagContext =
  createContext<{
    flags: FeatureFlags
    toggleFlag: (key: FeatureFlagKey) => void
  } | null>(null)

export function FeatureFlagProvider({ children }) {

  const [flags, setFlags] = useState<FeatureFlags>(defaultFlags)

  // Load persisted flags
  useEffect(() => {
    const stored = loadFlags<FeatureFlags>()
    if (stored) setFlags(stored)
  }, [])

  // Persist changes
  useEffect(() => {
    saveFlags(flags)
  }, [flags])

  function toggleFlag(key: FeatureFlagKey) {
    setFlags(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  return (
    <FeatureFlagContext.Provider value={{ flags, toggleFlag }}>
      {children}
    </FeatureFlagContext.Provider>
  )
}