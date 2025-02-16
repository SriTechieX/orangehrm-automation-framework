// src/tests/employeeManagementTests.ts
import { test, expect } from '@playwright/test';  // ES Module import
import { LoginPage } from '../pages/loginPage';  // ES Module import
import { DashboardPage } from '../pages/dashboardPage';  // ES Module import
console.log("Hii.........");

test('Valid user should be able to log in and verify the dashboard', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  // Navigate to the login page
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Perform login
  await loginPage.login('Admin', 'admin123');

  // Verify the page title (Dashboard)
  const title = await dashboardPage.verifyPageTitle();
  expect(title).toBe('Dashboard');  // Make sure 'Dashboard' is the correct title
});
