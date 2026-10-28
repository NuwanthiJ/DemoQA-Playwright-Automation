import { test, expect } from '@playwright/test';

test('DemoQA Practice Form Automation', async ({ page }) => {

  await page.goto('https://demoqa.com/automation-practice-form', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  // Fill name
  await page.fill('#firstName', 'Nuwanthi');
  await page.fill('#lastName', 'Jayashani');

  // Email
  await page.fill('#userEmail', 'nuwanthi@gmail.com');

  // Gender
  await page.locator('label[for="gender-radio-2"]').click();

  // Mobile number
  await page.fill('#userNumber', '0771234567');

  // Date of Birth
  await page.click('#dateOfBirthInput');
  await page.locator('.react-datepicker__month-select').selectOption('March');
  await page.locator('.react-datepicker__year-select').selectOption('2002');
  await page.locator('.react-datepicker__day--015').click();

  // Subjects
  await page.fill('#subjectsInput', 'Maths');
  await page.keyboard.press('Enter');

  // Hobbies
  await page.locator('label[for="hobbies-checkbox-2"]').click();

  // Upload picture
  await page.setInputFiles('#uploadPicture', 'register-filled.png');

  // Address
  await page.fill('#currentAddress', 'Colombo, Sri Lanka');

  // State & City
  await page.locator('#state').click();
  await page.getByText('NCR').click();

  await page.locator('#city').click();
  await page.getByText('Delhi').click();

  // Submit
  await page.locator('#submit').click();

  // Verify success modal
  await expect(page.locator('#example-modal-sizes-title-lg'))
    .toHaveText('Thanks for submitting the form');
});
