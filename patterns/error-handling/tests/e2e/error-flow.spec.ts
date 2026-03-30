import { test, expect } from "@playwright/test"

test("global error appears", async ({ page }) => {
  await page.goto("/")

  await page.getByText("Trigger Global Error").click()

  await expect(page.getByText("Global failure")).toBeVisible()
})