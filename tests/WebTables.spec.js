import {test} from '@playwright/test'

test.only('Date Picker1', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")
    const rows = await page.locator("//table[@name='BookTable']/tbody/tr")
    const cols = await page.locator("//table[@name='BookTable']/tbody/tr[1]/th");

    console.log(await rows.count())
    console.log(await cols.count())

    for(let i = 1;i<await rows.count();i++)
    {
        const row = await rows.nth(i)
        const cols = await row.locator('td')
        
        for(let j = 0;j<await cols.count();j++)
        {
            const value = await cols.nth(j).textContent();
            console.log(value)
        }
    }
})