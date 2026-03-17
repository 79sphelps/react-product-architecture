import { test, expect } from "@playwright/test"

test("command palette appears", async ({ page }) => {
  await page.goto("http://localhost:5173")
  await expect(page.locator("text=Dashboard")).toBeVisible()
})