import { test, expect } from "@playwright/test"

test("typing updates URL", async ({ page }) => {
  await page.goto("http://localhost:5173")

  const input = page.locator("input")

  await input.fill("react")

  await expect(page).toHaveURL(/q=react/)
})