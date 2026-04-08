import { test, expect } from "@playwright/test"

test("updates URL on input", async ({ page }) => {
  await page.goto("/")

  await page.fill("input", "hello")

  await expect(page).toHaveURL(/q=hello/)
})