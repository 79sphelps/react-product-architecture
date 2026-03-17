import Fuse from "fuse.js"
import type { Command } from "../types/commandTypes"

export function fuzzySearch(
  commands: Command[],
  query: string
) {

  const fuse = new Fuse(commands, {
    keys: ["label"],
    threshold: 0.3
  })

  return query
    ? fuse.search(query).map(r => r.item)
    : commands
}