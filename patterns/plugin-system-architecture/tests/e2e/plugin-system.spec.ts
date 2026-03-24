import { test, expect } from "@playwright/test";

test("toggles plugins", async ({ page }) => {
  await page.goto("http://localhost:5173");

  const checkbox = page.getByLabel(/greeting/i);

  await checkbox.click();

  await expect(page.getByText(/welcome user/i)).not.toBeVisible();
});
