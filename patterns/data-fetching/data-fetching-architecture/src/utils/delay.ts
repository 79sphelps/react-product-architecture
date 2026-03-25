/**
 * Responsibility:
 * Simulates network latency and helps with testing async UI states.
 */

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}