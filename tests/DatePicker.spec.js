import {test} from '@playwright/test'

// test.only('Date Picker1', async ({page}) => {

//     await page.goto("https://testautomationpractice.blogspot.com/")

//     await page.fill("input#datepicker","08/13/2025");

//     await page.waitForTimeout(5000);
// })

test.only('Date Picker2', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    const year = 2026
    const month = "July"
    const day = 25;
    await page.waitForTimeout(5000);
    await page.click("input#datepicker")

    while(true)
    {
        const currentYear = await page.locator("//span[@class='ui-datepicker-year']").textContent();
        const currentMonth = await page.locator("//span[@class='ui-datepicker-month']").textContent();

        if(currentYear == year && currentMonth == month)
        {
            break;
        }
        await page.click("//span[text()='Next']")
    }

    const dates = await page.$$("//a[@class='ui-state-default']")

    for(const date of dates)
    {
        if(await date.textContent() == day)
        {
            await date.click();
        }
    }
    //await page.waitForTimeout(5000);
})