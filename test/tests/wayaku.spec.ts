import { test, expect } from '@playwright/test';
const { chromium } = require('playwright');

test.describe('Wayaku', () => {
  test('Iniciar sesion', async ({ page }) => {
    await page.goto('http://localhost:3000/login');
    await expect(page).toHaveTitle(/Wayaku App/);

    await page.type('#username', 'jarl');
    await page.type('#password', 'jarl1997');
    await page.screenshot({ path: 'login.png' });
    await page.click('#entryWayaku');
  });

  test('Wayaku presuuesto', async ({ page }) => {
    await page.goto('http://localhost:3000/login');
    await expect(page).toHaveTitle(/Wayaku App/);

    await page.type('#username', 'jarl');
    await page.type('#password', 'jarl1997');
    await page.click('#entryWayaku');

    await page.click('#BudgetForm');

    await page.type('#emoji', '👌');
    await page.type('#name', 'Transporte');
    await page.type('#description', 'Transporte del carro');
    await page.type('#budget', "20");


    await page.screenshot({ path: 'budget.png' });
    await page.click('#saved');
  });
});

