import {test} from '@playwright/test'
import { Login } from '../Pages/LoginPage';
import { Dashboard } from '../Pages/DashboardPage';
import { Admin } from '../Pages/AdminPage';

test("Verify Admin User", async ({page}) =>{
    
    const lp = new Login(page);
    await lp.navigateToUrl();
    await lp.Login("Admin","admin123")

    const dp = new Dashboard(page);
    await dp.ClickonAdminSpan();

    const ap = new Admin(page)
    await ap.SearchAdminUser("Admin","(1) Record Found")
    
})