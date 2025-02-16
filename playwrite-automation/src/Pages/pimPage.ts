// src/pages/pimPage.ts
import { Page } from '@playwright/test';

export class PimPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators for the PIM page
  private employeeNameInput = 'input[name="employeeName"]';
  private searchButton = 'button[type="submit"]';

  // Method to search for an employee by name
  async searchEmployee(employeeName: string) {
    await this.page.fill(this.employeeNameInput, employeeName);
    await this.page.click(this.searchButton);
  }
}