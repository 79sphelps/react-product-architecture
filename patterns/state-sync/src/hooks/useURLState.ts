import { useEffect } from "react"
import { store } from "../state"

export function useURLState() {
  useEffect(() => {
    function syncFromURL() {
      const params = new URLSearchParams(window.location.search)
      const next = Object.fromEntries(params.entries())
      store.setState(next)
    }

    window.addEventListener("popstate", syncFromURL)

    return () => {
      window.removeEventListener("popstate", syncFromURL)
    }
  }, [])
}