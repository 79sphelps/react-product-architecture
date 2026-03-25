/**
 * Allows manual invalidation for testing + UX visibility
 */

import { queryClient } from "../core/QueryClient";

export function InvalidateButton({ queryKey }: { queryKey: string }) {
  return (
    <button
      onClick={() => queryClient.invalidateQueries(queryKey)}
      className="px-3 py-1 bg-yellow-500 text-black rounded hover:bg-yellow-700 active:bg-yellow-700 active:scale-[95%]"
    >
      Invalidate
    </button>
  );
}
