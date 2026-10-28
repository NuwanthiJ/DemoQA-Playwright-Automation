import { test, expect } from '@playwright/test';

test('DemoQA Register Form Automation', async ({ page }) => {

  // Go to DemoQA Register page
  await page.goto('https://demoqa.com/register', { waitUntil: 'domcontentloaded', timeout: 120000});

  // Fill First Name
  await page.locator('#firstname').fill('Nuwanthi');

  // Fill Last Name
  await page.locator('#lastname').fill('Vitharana');

  // Fill Username
  await page.locator('#userName').fill('nuwanthi123');

  // Fill Password
  await page.locator('#password').fill('nuwa@1234');

  // Try clicking Register button
  await page.locator('#register').click();

});
