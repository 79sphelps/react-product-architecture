/**
 * Responsibility:
 * UI for toggling plugins.
 */

import { usePlugins } from "../hooks/usePlugins";

export function PluginManagerPanel() {
  const { plugins, togglePlugin } = usePlugins();
  return (
    <div className="p-4 border mb-4">
      <h2 className="font-bold mb-2">Plugin Manager</h2>
      {plugins.map((p) => {
        const id = `plugin-${p.id}`;
        return (
          <div key={p.id} className="flex items-center mb-2">
            <input
              id={id}
              type="checkbox"
              checked={Boolean(p.enabled)}
              onChange={() => togglePlugin(p.id)}
            />
            <label htmlFor={id} className="ml-2">
              {p.id} ({p.slot})
            </label>
          </div>
        );
      })}
    </div>
  );
}
