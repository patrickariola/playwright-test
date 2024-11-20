import { test } from '@playwright/test';

test.use({
  storageState: 'john-auth.json',
});

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/list');
  await page.getByRole('cell', { name: 'Condition' }).click();
  await page.getByRole('cell', { name: 'excellent' }).click();
  await page.getByRole('cell', { name: 'excellent' }).dblclick();
  await page.getByRole('cell', { name: 'poor' }).click();
  await page.getByRole('cell', { name: '1' }).click();
  await page.getByRole('cell', { name: '3' }).dblclick();
  await page.getByRole('cell', { name: 'Basket' }).click();
  await page.getByRole('cell', { name: 'Bicycle' }).click();
  await page.getByRole('cell', { name: 'Name' }).click();
  await page.getByRole('cell', { name: 'Condition' }).click();
  await page.getByRole('cell', { name: 'Actions' }).click();
  await page.getByRole('cell', { name: 'Edit' }).first().click();
  await page.getByRole('cell', { name: 'Edit' }).first().dblclick();
  await page.getByRole('button', { name: 'john@foo.com' }).click();
  await page.getByRole('button', { name: 'john@foo.com' }).dblclick();
  await page.getByRole('link', { name: 'List Stuff' }).click();
  await page.locator('#basic-navbar-nav').click();
  await page.getByText('Add StuffList Stuffjohn@foo.').click();
  await page.getByRole('row', { name: 'Basket 3 excellent Edit' }).getByRole('link').click();
  await page.locator('div').filter({ hasText: 'Edit' }).nth(1).click();
  await page.getByRole('heading', { name: 'Edit Stuff' }).click();
  await page.locator('div').filter({ hasText: 'Edit' }).nth(1).click();
});
