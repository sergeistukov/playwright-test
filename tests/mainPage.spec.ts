import { test, expect } from '@playwright/test';

test.describe('main page tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/');
  });

  test('Navigation panel visibility check (header)', async ({ page }) => {
    await expect.soft(page.getByRole('link', { name: 'Playwright logo Playwright' })).toBeVisible();
    await expect.soft(page.getByRole('link', { name: 'Docs' })).toBeVisible();
    await expect.soft(page.getByRole('link', { name: 'API', exact: true })).toBeVisible();
    await expect.soft(page.getByRole('button', { name: 'Node.js' })).toBeVisible();
    await expect.soft(page.getByRole('link', { name: 'Community' })).toBeVisible();
    await expect.soft(page.getByRole('link', { name: 'GitHub repository' })).toBeVisible();
    await expect.soft(page.getByRole('link', { name: 'Discord server' })).toBeVisible();
    await expect
      .soft(page.getByRole('button', { name: 'Switch between dark and light' }))
      .toBeVisible();
    await expect.soft(page.getByRole('button', { name: 'Search (Command+K)' })).toBeVisible();
  });

  test('Navigation panel names check', async ({ page }) => {
    await expect
      .soft(page.getByRole('link', { name: 'Playwright logo Playwright' }))
      .toContainText('Playwright');
    await expect.soft(page.getByRole('link', { name: 'Docs' })).toContainText('Docs');
    await expect.soft(page.getByRole('link', { name: 'API', exact: true })).toContainText('API');
    await expect.soft(page.getByRole('button', { name: 'Node.js' })).toContainText('Node.js');
    await expect.soft(page.getByRole('link', { name: 'Community' })).toContainText('Community');
    await page.getByText('Get startedStar72k+').click({
      button: 'right',
    });
  });

  test('Check attribute href', async ({ page }) => {
    await expect
      .soft(page.getByRole('link', { name: 'Playwright logo Playwright' }))
      .toHaveAttribute('href', '/');
    await expect
      .soft(page.getByRole('link', { name: 'Docs' }))
      .toHaveAttribute('href', '/docs/intro');
    await expect
      .soft(page.getByRole('link', { name: 'API', exact: true }))
      .toHaveAttribute('href', '/docs/api/class-playwright');
    await expect
      .soft(page.getByRole('link', { name: 'Community' }))
      .toHaveAttribute('href', '/community/welcome');
    await expect
      .soft(page.getByRole('link', { name: 'GitHub repository' }))
      .toHaveAttribute('href', 'https://github.com/microsoft/playwright');
    await expect
      .soft(page.getByRole('link', { name: 'Discord server' }))
      .toHaveAttribute('href', 'https://aka.ms/playwright/discord');
  });

  test('Check dark mode', async ({ page }) => {
    await page.getByLabel('Switch between dark and light').click();
    await page.getByRole('button', { name: 'Switch between dark and light' }).click();
    await expect.soft(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  });

  test('Check header', async ({ page }) => {
    await expect
      .soft(page.locator('h1'))
      .toContainText('Playwright enables reliable end-to-end testing for modern web apps.');
  });

  test('Check get started button', async ({ page }) => {
    await expect.soft(page.getByRole('link', { name: 'Get started' })).toBeVisible();
    await expect.soft(page.getByRole('link', { name: 'Get started' })).toContainText('Get started');
    await expect
      .soft(page.getByRole('link', { name: 'Get started' }))
      .toHaveAttribute('href', '/docs/intro');
  });
});
