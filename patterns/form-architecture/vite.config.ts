/**
 * File: vite.config.ts
 *
 * Responsibility:
 * Configures Vite build tooling and Vitest testing environment.
 *
 * Architectural Alignment:
 * - Test Environment Isolation
 * - Developer Experience Optimization
 */

/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
})