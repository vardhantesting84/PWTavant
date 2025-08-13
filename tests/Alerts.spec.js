import {test} from '@playwright/test'
test('Confimation Alert Behaviour', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog', async dialog => {
        await dialog.accept();
    })
    //Before alert is available that should be handled
    await page.locator("//button[@id='confirmBtn']").click();
    
    await page.waitForTimeout(5000);
})

test.only('Prompt Alert Behaviour', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog', async dialog => {
        await dialog.accept("Sachin");
    })
    //Before alert is available that should be handled
    await page.locator("//button[@id='promptBtn']").click();
    
    await page.waitForTimeout(5000);
})