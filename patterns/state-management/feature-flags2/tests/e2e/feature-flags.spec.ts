import { test, expect } from "@playwright/test"

test("toggles feature flag", async ({ page }) => {
  await page.goto("/")

  await page.getByLabel("newUI").click()

  await expect(page.getByText("New UI Enabled")).toBeVisible()
})