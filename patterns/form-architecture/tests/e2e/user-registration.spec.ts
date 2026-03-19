/**
 * E2E Test
 *
 * Tests the real user flow.
 */

import { test, expect } from "@playwright/test"

test("user can submit registration form", async ({ page }) => {

  await page.goto("http://localhost:5173")

  await page.fill('input[name="email"]', "test@test.com")
  await page.fill('input[name="password"]', "password123")
  await page.fill('input[name="phone"]', "1234567890")

  await page.click('button[type="submit"]')

  await expect(page.locator("body"))
    .toContainText("Submitted")

})