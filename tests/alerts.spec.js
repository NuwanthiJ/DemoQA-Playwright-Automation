import { test, expect } from '@playwright/test';

test('DemoQA Alerts - Prompt Alert', async ({ page }) => {

  // Open DemoQA Alerts page
  await page.goto('https://demoqa.com/alerts', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  // Listen for the dialog (prompt alert)
  page.once('dialog', async (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.accept('Hello, this is Nuwanthi!');
  });

  // Click the Prompt button
  await page.locator('#promtButton').click();

  // Wait for the result text
  const result = page.locator('#promptResult');
  await result.waitFor({ state: 'visible', timeout: 10000 });

  // Verify the result
  await expect(result).toHaveText(/You entered Hello, this is Nuwanthi!/);

});
