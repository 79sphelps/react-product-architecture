/// <reference types="vitest" />
/// <reference types="vite/client" />

/**
 * File: vitest.config.ts
 *
 * Responsibility:
 * Configure Vitest testing environment for React component testing.
 *
 * Architectural Alignment:
 * - Testing Isolation
 * - Deterministic UI Testing
 * - Separation of Unit / Integration / E2E layers
 */

import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {

    globals: true,

    environment: "jsdom",

    setupFiles: "./src/tests/setup.ts",

    include: [
      "src/tests/**/*.test.ts",
      "src/tests/**/*.test.tsx"
    ],

    exclude: [
      "node_modules",
      "dist",
      "e2e"
    ]
  }
})