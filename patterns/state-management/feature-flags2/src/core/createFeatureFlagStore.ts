/**
 * Pattern: Feature Flag Store (Observer Pattern)
 */

import type { FeatureFlags, FeatureFlag, Listener } from "./types";

export function createFeatureFlagStore(initial: FeatureFlags = {}) {
  let flags = initial;
  const listeners = new Set<Listener>();

  function setFlags(next: FeatureFlags) {
    flags = next;
    listeners.forEach((l) => l(flags));
  }

  function updateFlag(key: string, value: FeatureFlag) {
    flags = { ...flags, [key]: value };
    listeners.forEach((l) => l(flags));
  }

  function getFlags() {
    return flags;
  }

  function subscribe(listener: Listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  }

  return {
    setFlags,
    updateFlag,
    getFlags,
    subscribe,
  };
}

export const featureFlagStore = createFeatureFlagStore();
