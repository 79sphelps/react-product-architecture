import { test, expect } from "@playwright/test";

test("loads and refetches data", async ({ page }) => {
  await page.goto("http://localhost:5173");

  await expect(page.getByText("John")).toBeVisible();

  await page.getByText("Refetch").click();

  await expect(page.getByText("Jane")).toBeVisible();
});

test("invalidates and refetches", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("John")).toBeVisible();

  await page.getByText("Invalidate").click();

  await expect(page.getByText("Loading")).toBeVisible();
});

test("user can invalidate and refetch", async ({ page }) => {
  await page.goto("/")

  await expect(page.getByText("John")).toBeVisible()

  await page.getByText("Invalidate").click()

  await expect(page.getByText("Loading")).toBeVisible()

  await expect(page.getByText("John")).toBeVisible()
})