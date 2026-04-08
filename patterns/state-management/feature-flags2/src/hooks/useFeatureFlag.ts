import { useFeatureFlags } from "./useFeatureFlags";
import { evaluateFlag } from "../utils/evaluateFlag";

export function useFeatureFlag(key: string) {
  const flags = useFeatureFlags();
  const flag = flags[key];

  return evaluateFlag(flag ?? false);
}
