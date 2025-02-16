// src/pages/dashboardPage.ts
import { Page } from '@playwright/test';

export class DashboardPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators for the dashboard page
  private pageTitle = 'h1';

  // Method to verify page title
  async verifyPageTitle() {
    const title = await this.page.textContent(this.pageTitle);
    return title;
  }
}
