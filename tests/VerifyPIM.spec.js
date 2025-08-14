import {test,expect} from '@playwright/test'

test("Verify Admin User", async ({page}) =>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    //Login
    await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("//input[@name='password']").fill("admin123");
    await page.locator("//button[@type='submit']").click();

    //Assertion
    const dashboardElement = await page.locator("//span[text()='Dashboard']")
    await expect(dashboardElement).toBeVisible()

    //On Dashboard - Click on PIM
    await page.locator("(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'])[2]").click();

    await page.waitForTimeout(2000);
    //PIM
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("12345678")
    await page.locator("//button[text()=' Search ']").click();

    //Assertions
    await expect(page.locator("(//span[@class='oxd-text oxd-text--span'])[1]")).toBeVisible();
    await expect(page.locator("(//span[@class='oxd-text oxd-text--span'])[1]")).toHaveText("No Records Found");

})