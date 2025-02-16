// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: '../src/tests',  // Ensure this is pointing to your test directory
  timeout: 30000,
  retries: 1,
  workers: 1,
  reporter: 'list',
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    baseURL: 'https://opensource-demo.orangehrmlive.com/',
  },
});
