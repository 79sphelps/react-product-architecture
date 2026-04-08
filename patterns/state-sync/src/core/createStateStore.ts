import type { Listener } from "./types"

export function createStateStore<T extends object>(initial: T) {
  let state = initial
  const listeners = new Set<Listener>()

  function getState(): T {
    return state
  }

  function setState(partial: Partial<T>) {
    state = { ...state, ...partial }
    listeners.forEach((l) => l(state))
  }

  function subscribe(listener: Listener) {
    listeners.add(listener)
    return () => listeners.delete(listener)
  }

  return {
    getState,
    setState,
    subscribe,
  }
}