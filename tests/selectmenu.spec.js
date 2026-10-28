import { test, expect } from '@playwright/test';

test('DemoQA Select Menu Automation', async ({ page }) => {

  await page.goto('https://demoqa.com/select-menu', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  // Select "Group 2, option 1"
  await page.locator('#withOptGroup').click();
  await page.getByText('Group 2, option 1').click();

  await expect(page.locator('#withOptGroup')).toContainText('Group 2, option 1');

  // Select "Another root option"
  await page.locator('#selectOne').click();
  await page.getByText('Another root option').click();

  await expect(page.locator('#selectOne')).toContainText('Another root option');

  // Select "Green"
  await page.selectOption('#oldSelectMenu', { label: 'Green' });
  await expect(page.locator('#oldSelectMenu')).toHaveValue('2');

  // Multi select (Blue & Black)
  await page.locator('#selectMenuContainer .css-2b097c-container').nth(2).click();
  await page.getByText('Blue').click();
  await page.getByText('Black').click();

  await expect(page.getByText('Blue')).toBeVisible();
  await expect(page.getByText('Black')).toBeVisible();
});
