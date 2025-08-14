export class PIM
{
    constructor(page)
    {
        this.page = page
        this.EmployeeIdTxtBx = page.locator("(//input[@class='oxd-input oxd-input--active'])[2]")
        this.SearchBtn = page.locator("//button[text()=' Search ']")
        this.resultSpan = page.locator("(//span[@class='oxd-text oxd-text--span'])[1]")
    }

    async SearchPIMUser()
    {
        await this.AdminTxtBx.fill("12345678")
        await this.SearchBtn.click();

        await expect(this.resultSpan).toHaveText("No Records Found");
    }

}