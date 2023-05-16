// @ts-check
const { test, expect } = require('@playwright/test');
import { defineConfig } from '@playwright/test';
export default defineConfig({
  // Folder for test artifacts such as screenshots, videos, traces, etc.
  outputDir: './test-results',
  // Each test is given 30 seconds.
  timeout: 30000,
});

test('Home Page', async ({ page }) => {
  await page.goto('https://www.quantummetric.com/');
  await expect(page).toHaveScreenshot({
    timeout: 100000,
    threshold: 0.5,
  });
});

// test('Home Page - Spanish', async ({ page }) => {
//   await page.goto('https://www.quantummetric.com/es/');
//   await expect(page).toHaveScreenshot({
//     timeout: 100000,
//     threshold: 0.5,
//   });
// });

// test('Home Page - German', async ({ page }) => {
//   await page.goto('https://www.quantummetric.com/de/');
//   await expect(page).toHaveScreenshot({
//     timeout: 100000,
//     threshold: 0.5,
//   });
// });
