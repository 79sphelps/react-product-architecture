/**
 * Responsibility:
 * Centralized HTTP client used by all API modules.
 *
 * Why it exists:
 * Prevents components from making raw fetch calls and allows
 * consistent error handling and response normalization.
 *
 * Architectural Alignment:
 * - API Layer Isolation
 * - Dependency Inversion
 * - Single Responsibility Principle
 */

export async function api<T>(
  url: string,
  options?: RequestInit
): Promise<T> {

  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {})
    },
    ...options
  })

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`)
  }

  return response.json()
}