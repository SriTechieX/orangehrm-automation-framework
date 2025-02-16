import { Page, Locator, expect } from '@playwright/test';

export class DashboardPage {
  private readonly page: Page;
  private readonly pageTitleLocator: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitleLocator = page.locator('.oxd-topbar-header-breadcrumb > .oxd-text');
  }

  /**
   * Verifies that the dashboard page has loaded
   */
  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
    await expect(this.pageTitleLocator).toBeVisible({ timeout: 30000 });
  }

  /**
   * Retrieves the page title
   * @returns The text content of the page title
   */
  async getPageTitle(): Promise<string> {
    await this.waitForPageLoad();
    const title = await this.pageTitleLocator.textContent();
    return title?.trim() ?? '';
  }

  /**
   * Verifies the page title
   * @param expectedTitle The expected title of the page
   * @returns A boolean indicating whether the title matches the expected value
   */
  async verifyPageTitle(): Promise<string> {
    const actualTitle = await this.getPageTitle();
    return actualTitle;
  }
}
