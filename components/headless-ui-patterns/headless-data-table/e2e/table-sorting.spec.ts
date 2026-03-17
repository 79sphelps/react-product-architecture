import { test, expect } from "@playwright/test"

test("table displays user rows", async ({ page }) => {
  await page.goto("http://localhost:5173")

  await expect(page.locator("text=Alice")).toBeVisible()
})