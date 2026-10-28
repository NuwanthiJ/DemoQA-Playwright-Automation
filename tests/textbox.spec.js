import { test, expect } from '@playwright/test';

test('DemoQA Text Box Form', async ({ page }) => {

  // Open DemoQA Alerts page
  await page.goto('https://demoqa.com/text-box', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await page.locator('#userName').fill('Nuwanthi');
  await page.locator('#userEmail').fill('nuwanthi@gmail.com');
  await page.locator('#currentAddress').fill('Colombo, Sri Lanka');
  await page.locator('#permanentAddress').fill('Kandy, Sri Lanka');

  await page.locator('#submit').click();

  await expect(page.locator('#name')).toHaveText('Name:Nuwanthi');
});
