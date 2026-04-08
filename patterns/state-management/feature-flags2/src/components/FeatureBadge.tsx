import { useFeatureFlag } from "../hooks/useFeatureFlag";

export function FeatureBadge({ flag }: { flag: string }) {
  const { enabled, variant } = useFeatureFlag(flag);

  return (
    <div className="flex items-center gap-2">
      <span className="font-medium">{flag}</span>

      <span
        className={`px-2 py-1 text-xs rounded-full ${
          enabled ? "bg-green-500 text-white" : "bg-gray-300 text-gray-700"
        }`}
      >
        {enabled ? variant : "OFF"}
      </span>
    </div>
  );
}
