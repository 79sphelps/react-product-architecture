import { renderHook } from "@testing-library/react";
import { PluginProvider } from "../../src/core/PluginProvider";
import { usePlugins } from "../../src/hooks/usePlugins";

test("provides plugin context", () => {
  const wrapper = ({ children }) => <PluginProvider>{children}</PluginProvider>;

  const { result } = renderHook(() => usePlugins(), { wrapper });

  expect(result.current.plugins).toBeDefined();
});
