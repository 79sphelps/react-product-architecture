import { useContext } from "react";
import { PluginContext } from "../core/PluginProvider";

export function usePlugins() {
  const ctx = useContext(PluginContext);

  if (!ctx) {
    throw new Error("PluginProvider missing");
  }

  return ctx;
}
