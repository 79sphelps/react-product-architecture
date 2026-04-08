export function parseState(value: string | null) {
  if (!value) return ""

  try {
    return decodeURIComponent(value)
  } catch {
    return value
  }
}