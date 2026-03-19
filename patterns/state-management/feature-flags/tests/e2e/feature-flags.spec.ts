import { test, expect } from "@playwright/test"

test("toggles feature flag", async ({ page }) => {

  await page.goto("http://localhost:5173")

  const checkbox = page.getByLabel("newDashboard")

  await checkbox.check()

  await expect(page.getByText("New Dashboard Enabled"))
    .toBeVisible()
})