import {test} from '@playwright/test'

test('INteracticting with Basic Elements', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")
    
    await page.click("//label[text()='Female']")
    await page.check("//label[text()='Wednesday']")

    await page.selectOption("//select[@id='country1']",'germany',{timeout:5000})

    await page.selectOption("//select[@id='colors']",{label:'White'})

    await page.waitForTimeout(5000);
})