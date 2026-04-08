import { useEffect, useState } from "react";
import { featureFlagStore } from "../core/createFeatureFlagStore";
import type { FeatureFlags } from "../core/types";

export function useFeatureFlags() {
  const [flags, setFlags] = useState<FeatureFlags>(featureFlagStore.getFlags());

  useEffect(() => {
    featureFlagStore.setFlags({
      newUI: {
        enabled: false,
        description: "Enable redesigned UI",
      },
      experiment: {
        enabled: false,
        variant: "A",
        description: "A/B test experiment",
      },
      admin: {
        enabled: false,
        description: "Admin permissions",
      },
    });

    return featureFlagStore.subscribe(setFlags);
  }, []);

  return flags;
}
