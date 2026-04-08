import { createStateStore } from "./core/createStateStore"
import type { AppState } from "./core/types"

export const store = createStateStore<AppState>({
  q: "",
})