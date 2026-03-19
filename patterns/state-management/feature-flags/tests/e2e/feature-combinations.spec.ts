import { test, expect } from "@playwright/test"

test("switches UI based on flags", async ({ page }) => {
  await page.goto("http://localhost:5173")

  await page.getByLabel("newDashboard").check()

  await expect(page.getByText("New Dashboard")).toBeVisible()

  await page.getByLabel("betaFeature").check()

  await expect(page.getByText("Advanced Dashboard")).toBeVisible()
})