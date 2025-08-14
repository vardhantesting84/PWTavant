import { expect,locator,page } from "@playwright/test"

export class Admin
{
    constructor(page)
    {
        this.page = page
        this.AdminTxtBx = page.locator("(//input[@class='oxd-input oxd-input--active'])[2]")
        this.SearchBtn = page.locator("//button[text()=' Search ']")
        this.resultSpan = page.locator("(//span[@class='oxd-text oxd-text--span'])[1]")
    }

    async SearchAdminUser(username,expectedValue)
    {
        await this.AdminTxtBx.fill(username)
        await this.SearchBtn.click();
        //await this.page.waitForTimeout(3000);
        await expect(this.resultSpan).toHaveText(expectedValue);
    }

}