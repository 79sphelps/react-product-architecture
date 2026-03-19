import { test, expect } from "@playwright/test"

test("scrolls grid", async ({ page }) => {

  await page.goto("http://localhost:5173")

  await page.mouse.wheel(0, 500)

})

test("scroll loads new rows", async ({ page }) => {

  await page.goto("http://localhost:5173")

  const grid = page.locator('[role="grid"]')

  await grid.evaluate(el => el.scrollTop = 5000)

  await expect(page.getByText("Row 200")).toBeVisible()
})