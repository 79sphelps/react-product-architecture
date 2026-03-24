/**
 * Responsibility:
 * Provides plugin state and filtering.
 */

import { createContext, useState } from "react";
import { getPlugins } from "./PluginRegistry";
import type { Plugin } from "./types";

export const PluginContext = createContext<{
  plugins: Plugin[];
  togglePlugin: (id: string) => void;
} | null>(null);

export function PluginProvider({ children }) {
  const [plugins, setPlugins] = useState(getPlugins());

  function togglePlugin(id: string) {
    setPlugins((prev) =>
      prev.map((p) => (p.id === id ? { ...p, enabled: !p.enabled } : p)),
    );
  }

  return (
    <PluginContext.Provider value={{ plugins, togglePlugin }}>
      {children}
    </PluginContext.Provider>
  );
}
