/**
 * Responsibility:
 * Retries async operations.
 */

export async function retry<T>(fn: () => Promise<T>, attempts = 3): Promise<T> {
  try {
    return await fn();
  } catch (err) {
    if (attempts <= 1) throw err;
    return retry(fn, attempts - 1);
  }
}
