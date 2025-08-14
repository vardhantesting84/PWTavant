export class Dashboard
{
    constructor(page)
    {
        this.page = page
        this.DashboardSpan = page.locator("//span[text()='Dashboard']")
        this.AdminSpan = page.locator("(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'])[1]")
        this.PIMSpan = page.locator("(//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'])[2]")
    }

    async ClickonAdminSpan()
    {
        await this.AdminSpan.click()
    }

    async ClickonPIMSpan()
    {
        await this.PIMSpan.click()
    }
}