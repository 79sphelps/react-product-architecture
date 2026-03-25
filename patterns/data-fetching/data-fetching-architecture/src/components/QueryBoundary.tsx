import { LoadingState } from "./LoadingState";
import { ErrorState } from "./ErrorState";

export function QueryBoundary({ state, children }: any) {
  if (state.isLoading) return <LoadingState />;
  if (state.isError) return <ErrorState message={state.error.message} />;

  return children;
}
