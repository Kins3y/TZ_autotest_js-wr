import { test, expect } from '@playwright/test';

test('autoswapping', async ({ page }) => {
  //await page.pause()


  await page.goto('https://changenow.io/exchange');
  await expect(page.getByRole('heading')).toContainText('Please fill in transaction details');
  await expect(page.getByLabel('You Send')).toBeVisible();
  await expect(page.getByRole('button', { name: 'icon-btc BTC' })).toBeVisible();
  await expect(page.getByLabel('You Get')).toBeVisible();
  await expect(page.getByRole('button', { name: 'icon-eth ETH' })).toBeVisible();
  await expect(page.getByPlaceholder('Enter the ETH payout address')).toBeVisible();
  await expect(page.getByLabel("I've read and agree to the")).toBeChecked();
  await expect(page.getByRole('button', { name: 'Confirm' })).toBeVisible();
  await page.waitForTimeout(2000);


  await page.getByRole('button', { name: 'icon-btc BTC' }).click();
  await page.waitForTimeout(1000);


  await page.getByPlaceholder('Type a currency').fill('Solana');
  await page.getByPlaceholder('Type a currency').press('Enter');
  await page.waitForTimeout(1000);


  await page.getByRole('button', { name: 'icon-eth ETH' }).click();
  await page.getByPlaceholder('Type a currency').fill('Tether USD');
  await page.getByPlaceholder('Type a currency').press('Enter');
  await page.getByLabel('You Send').click();
  await page.getByLabel('You Send').fill('5');
  await page.waitForTimeout(1000);


  await page.getByPlaceholder('Enter the USDT payout address').click();
  await page.getByPlaceholder('Enter the USDT payout address').fill('0x51f258ae0fa7e1f1a578e405a1c76c76341cc19f');
  await page.waitForTimeout(2500);


  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.waitForTimeout(3000);


//   await expect(page.getByText('The current exchange may be very unprofitableThe network fees for this exchange')).toBeVisible();
//   await expect(page.getByRole('dialog')).toContainText('The network fees for this exchange transaction are relatively high which will significantly reduce the amount of funds you will receive.');
//   await page.getByRole('button', { name: 'I understand, let\'s start' }).click();
  await expect(page.getByRole('heading')).toContainText('Please send the funds you would like to exchange');
  await expect(page.getByText('Awaiting deposit')).toBeVisible();
  await expect(page.locator('#exchange-stepper')).toContainText('0x51f258ae0fa7e1f1a578e405a1c76c76341cc19f');
});