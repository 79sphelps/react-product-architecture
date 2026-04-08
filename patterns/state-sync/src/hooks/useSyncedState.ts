import { useEffect, useState } from "react"
import { store } from "../state"

export function useSyncedState() {
  const [state, setLocal] = useState(store.getState())

  useEffect(() => {
    return store.subscribe(setLocal)
  }, [])

  return {
    state,
    setState: store.setState,
  }
}