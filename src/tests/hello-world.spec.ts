// src/tests/hello-world.spec.ts
import { test } from '@playwright/test';

test('Hello World Test', async ({ page }) => {
  console.log('Hello World'); // This will print "Hello World" to the console

  // Optionally, navigate to a page to make sure Playwright works
  await page.goto('https://example.com');
  await page.screenshot({ path: 'example.png' }); // Take a screenshot
});
