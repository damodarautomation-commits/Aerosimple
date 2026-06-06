import { defineConfig } from '@playwright/test';
import 'dotenv/config';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  retries: 0,
  workers: 1,
  reporter: 'html',

  use: {
    headless: true,
    trace: 'on',
    viewport: null,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',

    launchOptions: {
      args: ['--start-maximized'],
    },

    baseURL: process.env.BASE_URL,
  },
});