// @ts-check
const { test, expect } = require('@playwright/test');
import { defineConfig } from '@playwright/test';
export default defineConfig({
  // Folder for test artifacts such as screenshots, videos, traces, etc.
  outputDir: './test-results',

  // Each test is given 30 seconds.
  timeout: 30000,
});

test('Atlas Landing Page', async ({ page }) => {
  await page.goto('https://www.quantummetric.com/atlas/');
  await expect(page).toHaveScreenshot({
    fullPage: true,
    timeout: 100000,
    threshold: 0.5,
  });
});

test('Atlas Landing Page - German', async ({ page }) => {
  await page.goto('https://www.quantummetric.com/atlas/de/');
  await expect(page).toHaveScreenshot({
    fullPage: true,
    timeout: 100000,
    threshold: 0.5,
  });
});

test('Atlas Landing Page - Spanish', async ({ page }) => {
  await page.goto('https://www.quantummetric.com/atlas/es/');
  await expect(page).toHaveScreenshot({
    fullPage: true,
    timeout: 100000,
    threshold: 0.5,
  });
});
