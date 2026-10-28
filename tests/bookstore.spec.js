import { test, expect } from '@playwright/test';

test('DemoQA Book Store Search Automation', async ({ page }) => {

  // Open Login page
  await page.goto('https://demoqa.com/login', { waitUntil: 'domcontentloaded', timeout: 120000 });

  // Login
  await page.fill('#userName', 'nuwanthi123');
  await page.fill('#password', 'nuwa@1234');
  await page.click('#login');

  // Wait for profile page
  await expect(page).toHaveURL('https://demoqa.com/profile');

  // Click "Go To Book Store"
  await page.click('#gotoStore');
  await expect(page).toHaveURL('https://demoqa.com/books');

  // Search book
  await page.fill('#searchBox', 'Git Pocket Guide');

  // Verify book appears
  await expect(page.getByText('Git Pocket Guide')).toBeVisible();
});
