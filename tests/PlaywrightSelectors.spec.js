import {test} from '@playwright/test'

test("Playwright Selectors Demo",async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.getByRole('textbox',{name:'Name'}).fill("Sachin");
    await page.getByLabel('Female').click();
    await page.getByPlaceholder("Enter Phone").fill("1234567890")
    await page.getByText("Wednesday").click();

    await page.waitForTimeout(5000);
})