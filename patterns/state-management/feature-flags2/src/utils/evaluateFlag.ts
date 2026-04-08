/**
 * Pattern: Feature Evaluation
 */

import type { FeatureFlag, FeatureVariant } from "../core/types";

export function evaluateFlag(flag: FeatureFlag) {
  if (typeof flag === "boolean") {
    return {
      enabled: flag,
      variant: "default" as FeatureVariant,
    };
  }

  return {
    enabled: flag.enabled,
    variant: flag.variant ?? "default",
  };
}
