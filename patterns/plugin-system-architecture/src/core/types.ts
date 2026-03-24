/**
 * Responsibility:
 * Defines plugin contracts.
 *
 * Architectural Alignment:
 * - Strong typing
 * - Extensibility
 */

export type PluginSlotName = "header" | "sidebar" | "dashboard" | "footer";

export type Plugin = {
  id: string;
  slot: PluginSlotName;
  component: React.ComponentType;
  enabled?: boolean;
};
