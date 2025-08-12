import {expect, test} from '@playwright/test'

test('Verify Title', async ({page}) => {

   await page.goto("https://practice.bpbonline.com/");

    await expect(page).toHaveTitle("BPB Online");

})