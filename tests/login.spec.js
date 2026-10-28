import { test, expect } from '@playwright/test';

test('DemoQA Login Form Automation', async ({ page }) => {

  // Go to DemoQA Login page
  await page.goto('https://demoqa.com/login', { waitUntil: 'domcontentloaded', timeout: 120000});

  // Fill Username
  await page.locator('#userName').fill('nuwanthi123');

  // Fill Password
  await page.locator('#password').fill('nuwa@1234');

  // Try clicking Login button
  await page.locator('#login').click();

});
