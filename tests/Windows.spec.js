import {expect, test} from '@playwright/test'

test('Window handling', async ({browser}) => {

    //We have to open multiple pages/tabs on the same context
    const context = await browser.newContext()
    
    //Single Tab/Window/Instance
    const page = await context.newPage();
    //const page2 = await context.newPage()

    //Tab/Window navigate to URL
    await page.goto("https://testautomationpractice.blogspot.com/")
    //await page2.goto("https://www.flipkart.com/")

    const newTabBtn = await page.locator("//button[text()='New Tab']")

    //There will be a new page which will be opened by clicking new Tab Btn
    const [page2] = await Promise.all(
        [
           context.waitForEvent('page'),
           newTabBtn.click()
        ]
    )

    await page.waitForTimeout(3000)

    const title = await page2.title();
    await expect(title).toBe("SDET-QA Blog")

    //await page.waitForTimeout(3000)
})