import { test, expect } from '@playwright/test';

test('Benchmark transferables on browsers', async ({ page, browser }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Benchmark/);

  // create a locator
  const structuredCloneBtn = page.locator('button#structuredClone');

  // Expect an attribute "to be strictly equal" to the value.
  await expect(structuredCloneBtn).toHaveAttribute('type', 'button');

  // Click the get started link.
  await structuredCloneBtn.click();

  // Expects the URL to contain intro.
  const structuredCloneResult = page.locator("#structuredCloneResult");
  await structuredCloneResult.waitFor();

  console.log(`structuredClone (browser)`)
  console.log(structuredCloneResult.getAttribute("data-value"))

  // create a locator
  const postMessageBtn = page.locator('button#postMessage');

  // Expect an attribute "to be strictly equal" to the value.
  await expect(postMessageBtn).toHaveAttribute('type', 'button');

  // Click the get started link.
  await postMessageBtn.click();

  // Expects the URL to contain intro.
  const postMessageResult = page.locator("#postMessageResult");
  await postMessageResult.waitFor();

  console.log(`postMessage (browser)`)
  console.log(postMessageResult.getAttribute("data-value"))

  await browser.close();
});
