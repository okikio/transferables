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
  console.log(await structuredCloneResult.getAttribute("data-value"))

  page.on('console', (msg) => {
    if (msg && msg.text) {
      if (typeof msg.text === 'function') {
        console.log('PAGE LOG:', msg.text());
      } else {
        console.log('PAGE LOG:', msg.text);
      }
    } else {
      console.log('PAGE LOG:', msg);
    }
  });

  // create a locator
  const postMessageMessageChannelBtn = page.locator('button#postMessageMessageChannel');

  // Expect an attribute "to be strictly equal" to the value.
  await expect(postMessageMessageChannelBtn).toHaveAttribute('type', 'button');

  // Click the get started link.
  await postMessageMessageChannelBtn.click();

  // Expects the URL to contain intro.
  const postMessageMessageChannel = page.locator("#postMessageMessageChannelResult");
  await postMessageMessageChannel.waitFor();

  console.log(`postMessage (MessageChannel) (browser)`)
  console.log(await postMessageMessageChannel.getAttribute("data-value"));

  // create a locator
  const postMessageWorkerBtn = page.locator('button#postMessageWorker');

  // Expect an attribute "to be strictly equal" to the value.
  await expect(postMessageWorkerBtn).toHaveAttribute('type', 'button');

  // Click the get started link.
  await postMessageWorkerBtn.click();

  // Expects the URL to contain intro.
  const postMessageWorker = page.locator("#postMessageWorkerResult");
  await postMessageWorker.waitFor();

  console.log(`postMessage (Worker) (browser)`)
  console.log(await postMessageWorker.getAttribute("data-value"));
});
