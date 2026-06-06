import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  retries: 0,
  workers: 1,
  reporter: 'html',

  use: {
    headless: true, // browser visible
    trace: 'on',
    viewport: null,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',

    launchOptions: {
      args: ['--start-maximized'],
    },

    baseURL: 'https://app.staging.aerosimple.com/',
  },
});