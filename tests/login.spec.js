// @ts-check
import { test } from '@playwright/test';
import LoginPage from '../pages/loginpage.js';
test('Aerosimple Login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await page.goto('/');
  await loginPage.login();
});
