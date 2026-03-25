/**
 * Responsibility:
 * Defines all core types for the data-fetching system.
 *
 * Architectural Alignment:
 * - Single source of truth for async state
 * - Strong typing across queries and mutations
 * - Predictable UI state derivation
 *
 * Notes:
 * This file standardizes how async data is represented across the app.
 * Every hook and component relies on these shapes.
 */

export type QueryStatus = "idle" | "loading" | "success" | "error";

// Normalized error shape to prevent inconsistent API error handling.
export type NormalizedError = {
  message: string;
  code?: string;
};

// Base async state shared across query + mutation.
export type BaseAsyncState<TData, TError = NormalizedError> = {
  status: QueryStatus;
  data: TData | null;
  error: TError | null;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
};

// Query state used by useQuery.
export type QueryState<TData, TError = NormalizedError> = {
  status: QueryStatus
  data: TData | null
  error: TError | null
  isLoading: boolean
  isError: boolean
  isSuccess: boolean
  isFetching: boolean
  updatedAt: number
}

// Mutation state used by useMutation.
export type MutationState<TData, TError = NormalizedError> = BaseAsyncState<
  TData,
  TError
> & {
  isIdle: boolean; // Tracks whether a mutation has been triggere
};

export type QueryFn<TData> = () => Promise<TData>;

export type MutationFn<TInput, TOutput> = (input: TInput) => Promise<TOutput>;

// Observer callback used internally.
export type Listener<T> = (state: T) => void;
