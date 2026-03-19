import { test, expect } from "@playwright/test"

test("user can update profile name", async ({ page }) => {
  await page.goto("http://localhost:5173")

  await page.fill("input", "Jane")

  await page.click("text=Save")

  await expect(page.locator("text=Saved!")).toBeVisible()
})