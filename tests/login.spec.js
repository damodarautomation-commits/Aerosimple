import { test } from '@playwright/test';
import 'dotenv/config';
import LoginPage from '../pages/loginpage.js';
test('Aerosimple Login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('/');
    await loginPage.login(process.env.EMAIL,process.env.PASSWORD);
});