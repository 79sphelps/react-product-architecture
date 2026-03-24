import { registerPlugin } from "../core/PluginRegistry";

function Admin() {
  return <div className="p-2 bg-red-100">Admin Tools</div>;
}

registerPlugin({
  id: "admin",
  slot: "sidebar",
  component: Admin,
});
