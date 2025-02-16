// src/pages/logoutPage.ts
import { Page, Locator } from '@playwright/test';

export class LogoutPage {
  private readonly page: Page;
  private readonly userDropdown: Locator;
  private readonly logoutLink: Locator;
  private readonly loginForm: Locator;

  constructor(page: Page) {
    this.page = page;
    this.userDropdown = page.locator('.oxd-userdropdown-tab');
    this.logoutLink = page.locator('a:has-text("Logout")');
    this.loginForm = page.locator('.orangehrm-login-form');
  }

  /**
   * Performs the logout action
   */
  async logout(): Promise<void> {
    await this.userDropdown.click();
    await this.logoutLink.click();
    await this.page.waitForNavigation();
  }

  /**
   * Checks if the user is logged out by verifying the presence of the login form
   * @returns A boolean indicating whether the user is logged out
   */
  async isLoggedOut(): Promise<boolean> {
    return await this.loginForm.isVisible();
  }

  /**
   * Attempts to access a protected page after logout
   * @param url The URL of a protected page
   * @returns A boolean indicating whether access was denied (redirected to login)
   */
  async attemptAccessAfterLogout(url: string): Promise<boolean> {
    await this.page.goto(url);
    return await this.isLoggedOut();
  }
}
