/**
 * Responsibility:
 * Renders plugins for a slot.
 */

import { usePlugins } from "../hooks/usePlugins";
import type { PluginSlotName } from "../core/types";

export function PluginSlot({ name }: { name: PluginSlotName }) {
  const { plugins } = usePlugins();

  const active = plugins.filter((p) => p.slot === name && p.enabled !== false);

  return (
    <>
      {active.map((p) => {
        const Component = p.component;
        return <Component key={p.id} />;
      })}
    </>
  );
}
