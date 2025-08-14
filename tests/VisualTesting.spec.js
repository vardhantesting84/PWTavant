import {test,expect} from '@playwright/test'

test("Verify Admin User", async ({page}) =>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    //await page.waitForTimeout(10000)

    expect(await page.screenshot()).toMatchSnapshot('LoginPage.png')
    await expect(page).toHaveScreenshot('LoginPage.png')

})