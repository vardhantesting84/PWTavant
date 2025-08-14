import {test,expect} from '@playwright/test'

test.beforeEach('Login', async ({page}) =>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    //Login
    await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("//input[@name='password']").fill("admin123");
    await page.locator("//button[@type='submit']").click();
})
test("Verify Admin User", async ({page}) =>{
    
    //Assertion
    const dashboardElement = await page.locator("//span[text()='Dashboard']")
    await expect(dashboardElement).toBeVisible()

    //On Dashboard - Click on Admin
    await page.locator("(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'])[1]").click();

    await page.waitForTimeout(2000);
    //Admin
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("Admin")
    await page.locator("//button[text()=' Search ']").click();

    //Assertions
    await expect(page.locator("(//span[@class='oxd-text oxd-text--span'])[1]")).toBeVisible();
    await expect(page.locator("(//span[@class='oxd-text oxd-text--span'])[1]")).toHaveText("(1) Record Found");

})

// test("Verify Admin User", async ({page}) =>{
    
//     //Assertion
//     const dashboardElement = await page.locator("//span[text()='Dashboard']")
//     await expect(dashboardElement).toBeVisible()

//     //On Dashboard - Click on Admin
//     await page.locator("(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'])[1]").click();

//     await page.waitForTimeout(2000);
//     //Admin
//     await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("Admin")
//     await page.locator("//button[text()=' Search ']").click();

//     //Assertions
//     await expect(page.locator("(//span[@class='oxd-text oxd-text--span'])[1]")).toBeVisible();
//     await expect(page.locator("(//span[@class='oxd-text oxd-text--span'])[1]")).toHaveText("(1) Record Found");

// })