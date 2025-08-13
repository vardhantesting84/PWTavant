import {test} from '@playwright/test'
test.only('Frames', async ({page}) => {

    await page.goto("https://ui.vision/demo/webtest/frames/")
    
    //Frame Locator
    const frame1 =  await page.frameLocator("//frame[@src='frame_1.html']")

    await frame1.locator("input[name='mytext1']").fill("Sachin");

    await page.waitForTimeout(5000)
})