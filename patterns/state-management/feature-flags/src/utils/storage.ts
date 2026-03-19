/**
 * Responsibility:
 * Persists feature flags.
 */

const KEY = "feature_flags"

export function loadFlags<T>() {
  const raw = localStorage.getItem(KEY)
  return raw ? JSON.parse(raw) as T : null
}

export function saveFlags<T>(flags: T) {
  localStorage.setItem(KEY, JSON.stringify(flags))
}