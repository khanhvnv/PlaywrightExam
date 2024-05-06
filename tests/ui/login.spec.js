const { test, expect } = require('@playwright/test');
import { LoginPage } from "../../page-object/login-page";

test('Login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(process.env.userName,process.env.password);  
  await expect(page.getByText(process.env.userName)).toBeVisible();
});
