export type AppState = {
  q: string
}

export type Listener = (state: AppState) => void

export type SyncAdapter = {
  read(): Partial<AppState>
  write(state: AppState): void
}