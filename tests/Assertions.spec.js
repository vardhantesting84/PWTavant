import {expect, test} from '@playwright/test'

test('Page Assertions', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")
    
    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/")
    await expect(page).toHaveTitle("Automation Testing Practice")
})
test('Element Visibility Assertions', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")
    
    const nameField = page.locator("//input[@id='name']")

    await expect(nameField).toBeVisible();
    await expect(nameField).toBeAttached();
})

test('Element Text Assertions', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")
    
    const heading = page.locator("h1");
    await expect(heading).toHaveText("Automation Testing Practice")
    await expect(heading).toContainText("Automation")
    await expect(heading).toContainText("Testing")
    await expect(heading).toHaveText(/Automation.*Practice/)
})

test('Element Attribute Assertions', async ({page}) => {

    await page.goto("https://testautomationpractice.blogspot.com/")
    
    const nameField = page.locator("//input[@id='name']")

    await expect(nameField).toHaveAttribute('type')
    await expect(nameField).toHaveAttribute('type','text')

    await expect(nameField).not.toBeHidden();
    await expect(nameField).not.toHaveAttribute('sachin')
})