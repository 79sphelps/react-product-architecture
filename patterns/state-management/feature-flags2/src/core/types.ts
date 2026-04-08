/**
 * Pattern: Feature Flag Typing
 *
 * Why:
 * - Strong typing ensures safe feature evaluation
 * - Prevents runtime misconfiguration
 */

export type FeatureVariant = "A" | "B" | "default";

export type FeatureFlag =
  | boolean
  | {
      enabled: boolean;
      variant?: FeatureVariant;
      description?: string;
    };

export type FeatureFlags = Record<string, FeatureFlag>;

export type Listener = (flags: FeatureFlags) => void;
