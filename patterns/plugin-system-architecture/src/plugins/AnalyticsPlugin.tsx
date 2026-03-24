import { registerPlugin } from "../core/PluginRegistry";

function Analytics() {
  return <div className="p-2 bg-green-100">Analytics Widget</div>;
}

registerPlugin({
  id: "analytics",
  slot: "dashboard",
  component: Analytics,
});
