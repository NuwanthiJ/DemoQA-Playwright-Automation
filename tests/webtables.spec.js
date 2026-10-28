import { test, expect } from '@playwright/test';

test('DemoQA Web Tables – Add, Search & Delete User', async ({ page }) => {

  await page.goto('https://demoqa.com/webtables', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  // Click Add
  await page.click('#addNewRecordButton');

  // Fill form
  await page.fill('#firstName', 'Nuwanthi');
  await page.fill('#lastName', 'Jayashani');
  await page.fill('#userEmail', 'nuwanthi@gmail.com');
  await page.fill('#age', '23');
  await page.fill('#salary', '45000');
  await page.fill('#department', 'IT');

  await page.click('#submit');

  // Verify user added
  const table = page.locator('.rt-tbody');
  await expect(table).toContainText('Nuwanthi');

  // Search user
  await page.fill('#searchBox', 'Nuwanthi');
  await expect(table).toContainText('Nuwanthi');

  // Delete user
  await page.click('#delete-record-4');   // Last added row

  // Verify deleted
  await page.fill('#searchBox', 'Nuwanthi');
  await expect(table).not.toContainText('Nuwanthi');
});
