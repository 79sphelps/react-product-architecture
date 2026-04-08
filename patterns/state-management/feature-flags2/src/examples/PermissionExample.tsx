import { FeatureGate } from "../components/FeatureGate";

export function PermissionExample() {
  return (
    <FeatureGate
      flag="admin"
      fallback={<p className="text-gray-400">Admin access required</p>}
    >
      <button className="bg-red-500 text-white px-4 py-2 rounded">
        Delete User
      </button>
    </FeatureGate>
  );
}
