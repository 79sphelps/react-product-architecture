import type { ReactNode } from "react";
import { useFeatureFlag } from "../hooks/useFeatureFlag";

type Props = {
  flag: string;
  fallback?: ReactNode;
  children: ReactNode;
};

export function FeatureGate({ flag, fallback = null, children }: Props) {
  const { enabled } = useFeatureFlag(flag);

  return (
    <div className="transition-all duration-300">
      {enabled ? children : fallback}
    </div>
  );
}
