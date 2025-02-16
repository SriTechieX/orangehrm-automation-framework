// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',  // The directory where your test files will be located
  timeout: 30000,  // Default timeout for tests (30 seconds)
  retries: 1,  // Number of retries on test failure
  workers: 1,  // Number of parallel test workers
  reporter: 'list',  // Choose the reporter for output
  use: {
    headless: true,  // Run tests in headless mode
    viewport: { width: 1280, height: 720 },  // Set default viewport
    actionTimeout: 10000,  // Set timeout for each action (e.g., click, fill)
    baseURL: 'https://example.com/',  // Base URL for navigation
  },
});
