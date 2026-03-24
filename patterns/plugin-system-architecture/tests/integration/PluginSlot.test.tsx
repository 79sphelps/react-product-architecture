import { render, screen } from "@testing-library/react";
import { PluginProvider } from "../../src/core/PluginProvider";
import { PluginSlot } from "../../src/components/PluginSlot";

import "../../src/plugins/GreetingPlugin";

test("renders plugin in slot", () => {
  render(
    <PluginProvider>
      <PluginSlot name="header" />
    </PluginProvider>,
  );

  //   expect(screen.getByText(/welcome user/i)).toBeInTheDocument()
  expect(screen.getByRole("status", { name: /welcome/i })).toBeInTheDocument();
});
