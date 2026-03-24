import { registerPlugin } from "../core/PluginRegistry";

function Greeting() {
  return (
    <div role="status" aria-label="welcome message" className="p-2 bg-blue-100">
      Welcome User
    </div>
  );
}

registerPlugin({
  id: "greeting",
  slot: "header",
  component: Greeting,
});
