import { renderHook } from "@testing-library/react"
import { useVirtualGrid } from "../../src/hooks/useVirtualGrid"

test("creates virtual items", () => {

  const { result } = renderHook(() =>
    useVirtualGrid(100)
  )

  expect(result.current.virtualItems).toBeDefined()

})