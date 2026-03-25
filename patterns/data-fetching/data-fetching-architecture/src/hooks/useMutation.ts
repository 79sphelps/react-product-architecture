/**
 * Responsibility:
 * Handles mutations with state tracking.
 */

import { useState } from "react";
import type { MutationFn, MutationState } from "../core/types";

export function useMutation<TInput, TOutput>(fn: MutationFn<TInput, TOutput>) {
  const [state, setState] = useState<MutationState<TOutput>>({
    status: "idle",
    data: null,
    error: null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    isIdle: true,
  });

  async function mutate(input: TInput) {
    setState({
      status: "loading",
      data: null,
      error: null,
      isLoading: true,
      isError: false,
      isSuccess: false,
      isIdle: false,
    });

    try {
      const data = await fn(input);

      setState({
        status: "success",
        data,
        error: null,
        isLoading: false,
        isError: false,
        isSuccess: true,
        isIdle: false,
      });
    } catch (error: any) {
      setState({
        status: "error",
        data: null,
        error: { message: error.message },
        isLoading: false,
        isError: true,
        isSuccess: false,
        isIdle: false,
      });
    }
  }

  return { ...state, mutate };
}
