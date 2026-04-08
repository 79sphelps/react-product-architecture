import type { SyncAdapter } from "./types"

export function createURLAdapter(): SyncAdapter {
  return {
    read() {
      const params = new URLSearchParams(window.location.search)
      return {
        q: params.get("q") ?? "",
      }
    },

    write(state) {
      const params = new URLSearchParams()

      if (state.q) {
        params.set("q", state.q)
      }

      const query = params.toString()
      const url = query ? `?${query}` : window.location.pathname

      window.history.replaceState(null, "", url)
    },
  }
}