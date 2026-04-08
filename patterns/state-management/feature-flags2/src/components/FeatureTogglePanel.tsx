/**
 * Responsibility:
 * Interactive feature control panel with full UX feedback
 *
 * Improvements:
 * - Toggle + variant selection
 * - Clear descriptions
 * - Accessible controls
 * - Visual grouping
 */

import { useFeatureFlags } from "../hooks/useFeatureFlags";
import { featureFlagStore } from "../core/createFeatureFlagStore";
import type { FeatureVariant } from "../core/types";

export function FeatureTogglePanel() {
  const flags = useFeatureFlags();

  function updateFlag(key: string, enabled: boolean) {
    const current = flags[key];

    if (typeof current === "boolean") {
      featureFlagStore.updateFlag(key, enabled);
      return;
    }

    featureFlagStore.updateFlag(key, {
      ...current,
      enabled,
    });
  }

  function updateVariant(key: string, variant: FeatureVariant) {
    const current = flags[key];

    if (typeof current === "boolean") return;

    featureFlagStore.updateFlag(key, {
      ...current,
      variant,
    });
  }

  return (
    <aside className="fixed right-4 top-4 w-80 bg-white shadow-xl border rounded-xl p-4 space-y-4 z-50">
      <h2 className="text-lg font-bold">Feature Flags</h2>

      {Object.entries(flags).map(([key, value]) => {
        const isBoolean = typeof value === "boolean";
        const enabled = isBoolean ? value : value.enabled;
        const variant = !isBoolean ? (value.variant ?? "default") : "default";
        const description = !isBoolean ? value.description : undefined;

        return (
          <div key={key} className="border rounded-lg p-3 space-y-2">
            {/* Header */}
            <div className="flex items-center justify-between">
              <label className="font-medium">{key}</label>

              <input
                type="checkbox"
                checked={enabled}
                onChange={(e) => updateFlag(key, e.target.checked)}
                aria-label={`Toggle ${key}`}
              />
            </div>

            {/* Description */}
            {description && (
              <p className="text-xs text-gray-500">{description}</p>
            )}

            {/* Variant Selector */}
            {!isBoolean && enabled && (
              <select
                value={variant}
                onChange={(e) =>
                  updateVariant(key, e.target.value as FeatureVariant)
                }
                className="w-full border rounded px-2 py-1 text-sm"
              >
                <option value="default">Default</option>
                <option value="A">Variant A</option>
                <option value="B">Variant B</option>
              </select>
            )}
          </div>
        );
      })}
    </aside>
  );
}
