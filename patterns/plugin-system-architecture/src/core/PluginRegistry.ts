/**
 * Responsibility:
 * Central plugin registration system.
 *
 * Architectural Alignment:
 * - Single source of truth
 */

import type { Plugin } from "./types";

const plugins: Plugin[] = [];

export function registerPlugin(plugin: Plugin) {
  plugins.push({
    ...plugin,
    enabled: plugin.enabled ?? true,
  });
}

export function getPlugins() {
  return plugins;
}
