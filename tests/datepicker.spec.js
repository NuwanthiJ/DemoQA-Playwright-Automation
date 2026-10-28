import { test, expect } from '@playwright/test';

test('DemoQA Date Picker', async ({ page }) => {

  // Open DemoQA Alerts page
  await page.goto('https://demoqa.com/date-picker', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await page.locator('#datePickerMonthYearInput').click();
  await page.getByRole('option', { name: 'Choose Sunday, January 11th,' }).click();
  await page.locator('#dateAndTimePickerInput').click();
  await page.getByRole('option', { name: 'Choose Sunday, January 11th,' }).click();
  await page.getByText('06:30').click();
  await page.keyboard.press('Enter');

});
