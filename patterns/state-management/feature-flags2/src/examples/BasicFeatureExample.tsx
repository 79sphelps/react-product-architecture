import { FeatureGate } from "../components/FeatureGate";
import { FeatureBadge } from "../components/FeatureBadge";

export function BasicFeatureExample() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-xl font-bold">Feature Demo</h1>

      <FeatureBadge flag="newUI" />

      <FeatureGate
        flag="newUI"
        fallback={
          <div className="p-4 border rounded bg-gray-100">
            Old UI Experience
          </div>
        }
      >
        <div className="p-4 border rounded bg-green-100">
          New UI Experience 🎉
        </div>
      </FeatureGate>
    </div>
  );
}
