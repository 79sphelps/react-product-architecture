import { describe, it, expect } from "vitest"
import { getUser } from "../../src/api/userApi"

describe("userApi", () => {
  it("fetches user", async () => {
    const user = await getUser()
    expect(user.email).toBe("john@test.com")
  })
})