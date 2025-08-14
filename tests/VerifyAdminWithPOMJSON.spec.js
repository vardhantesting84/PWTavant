import { test } from '@playwright/test'
import { Login } from '../Pages/LoginPage';
import { Dashboard } from '../Pages/DashboardPage';
import { Admin } from '../Pages/AdminPage';

const loginData = JSON.parse(JSON.stringify(require("../TestData/LoginTestData.json")))
const adminData = JSON.parse(JSON.stringify(require("../TestData/AdminTestData.json")))

// for (const data of adminData) {
//     test(`Verify Admin User ${data.user}`, async ({ page }) => {

//         const lp = new Login(page);
//         await lp.navigateToUrl();
//         await lp.Login(loginData.username, loginData.password)

//         const dp = new Dashboard(page);
//         await dp.ClickonAdminSpan();

//         const ap = new Admin(page)
//         await ap.SearchAdminUser(data.user, data.expectValue)
//     })
// }

test("Verify Admin User", async ({ page }) => {
    
        const lp = new Login(page);
        await lp.navigateToUrl();
        await lp.Login(loginData.username, loginData.password)

        const dp = new Dashboard(page);
        await dp.ClickonAdminSpan();

        const ap = new Admin(page)
        for (const data of adminData) {
        await ap.SearchAdminUser(data.user, data.expectValue)
    }
})

// test('test', async ({ page }) => {
//   await page.goto('https://testautomationpractice.blogspot.com/');
//   await page.getByRole('textbox', { name: 'Enter Name' }).click();
//   await page.getByRole('textbox', { name: 'Enter Name' }).fill('Sachin');
// });