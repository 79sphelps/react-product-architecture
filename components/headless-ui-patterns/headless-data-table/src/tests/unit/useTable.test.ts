import { describe, it, expect } from "vitest"
import { useTable } from "../../hooks/useTable"
import { renderHook } from "@testing-library/react"

const data = [
  { name: "B" },
  { name: "A" }
]

describe("useTable", () => {
  it("sorts ascending", () => {
    const { result } = renderHook(() =>
      useTable(data, "name")
    )

    expect(result.current.data[0].name).toBe("A")
  })
})