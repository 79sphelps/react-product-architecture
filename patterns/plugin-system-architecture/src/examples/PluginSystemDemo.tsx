import { PluginProvider } from "../core/PluginProvider";
import { PluginManagerPanel } from "../components/PluginManagerPanel";
import { PluginSlot } from "../components/PluginSlot";

// register plugins
import "../plugins/GreetingPlugin";
import "../plugins/AnalyticsPlugin";
import "../plugins/AdminPlugin";

function Layout() {
  return (
    <div className="p-6 space-y-4">
      <PluginManagerPanel />

      <div className="border p-4">
        <h3>Header</h3>
        <PluginSlot name="header" />
      </div>

      <div className="border p-4">
        <h3>Sidebar</h3>
        <PluginSlot name="sidebar" />
      </div>

      <div className="border p-4">
        <h3>Dashboard</h3>
        <PluginSlot name="dashboard" />
      </div>
    </div>
  );
}

export function PluginSystemDemo() {
  return (
    <PluginProvider>
      <Layout />
    </PluginProvider>
  );
}
