import {test} from '@playwright/test'

test('INteracticting with Basic Elements', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")
    
    //Wait for a specific element tobe visible - Explicitly writing this wait statement
    //await page.waitForSelector("//select[@id='country1']",{state:'visible'});
    await page.waitFor("//select[@id='country1']",{state:'visible'});
    await page.selectOption("//select[@id='country1']",'germany',{timeout:5000})

    await page.selectOption("//select[@id='colors']",{label:'White'})

    await page.waitForTimeout(5000);
})