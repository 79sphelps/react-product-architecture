import { useFeatureFlag } from "../hooks/useFeatureFlag";

export function ABTestExample() {
  const { variant } = useFeatureFlag("experiment");

  return (
    <div className="p-4 border rounded">
      <p className="text-sm text-gray-500">Experiment Variant:</p>

      {variant === "A" && <p className="text-blue-500">Variant A UI</p>}
      {variant === "B" && <p className="text-purple-500">Variant B UI</p>}
      {variant === "default" && <p>Default Experience</p>}
    </div>
  );
}
