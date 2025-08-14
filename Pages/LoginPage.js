export class Login
{
    constructor(page)
    {
        this.page = page
        this.usernameTxtBx = page.locator("//input[@name='username']");
        this.passwordTxtBx = page.locator("//input[@name='password']");
        this.LoginBtn = page.locator("//button[@type='submit']");
    }

    async navigateToUrl(){
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    }

    async Login(username,password)
    {
        await this.usernameTxtBx.fill(username)
        await this.passwordTxtBx.fill(password)
        await this.LoginBtn.click();
    }
}