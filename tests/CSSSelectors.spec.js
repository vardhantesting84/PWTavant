import {test} from '@playwright/test'

test('CSS Selectors Demo', async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    //await page.locator("input#name").fill("Sachin");//Auto wait is on element & Await is on line execution
    await page.fill("input#name","Sachin")
    await page.fill("input[placeholder='Enter EMail']","Sachin@gmail.com")
    await page.fill("input[id^='ph']","1234567890")
    await page.fill("textarea[id$='ea']","Bangalore")
    //await page.fill("textarea[id*='tar']"," Delhi")

    await page.waitForTimeout(5000);
})