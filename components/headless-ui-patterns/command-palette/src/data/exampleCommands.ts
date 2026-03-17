import type { Command } from "../types/commandTypes"

export const exampleCommands: Command[] = [
  {
    id: "dashboard",
    label: "Go to Dashboard",
    run: () => console.log("Dashboard")
  },
  {
    id: "settings",
    label: "Open Settings",
    run: () => console.log("Settings")
  }
]