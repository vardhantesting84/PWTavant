import {test} from '@playwright/test'

test('XPath Demo', async ({page}) => { 
    
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.fill("//input[@id='name']","Sachin");
    await page.fill("//input[@id='email']","Sachin@gmail.com")
    await page.fill("//input[@id='phone']","1234567890")
    await page.fill("//textarea[@id='textarea']","Bangalore")

    await page.waitForTimeout(5000)

})