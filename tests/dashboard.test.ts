import {test,expect} from '../fixtures/baseFixtures';
import { DashboardPage } from '../pages/DashboardPage';
import loginData from '../test-data/loginData.json';
test.describe("Dashboard Test",()=>{
    test.beforeEach(async({loginPage})=>{
        await loginPage.navigate();
        await loginPage.login(
            loginData.validUser.username,
            loginData.validUser.password
        );
    });
    test.afterEach(async({dashboardPage})=>{
        await dashboardPage.clicklogout();
    });
    test('Verify My actions',async({dashboardPage})=>{
        await expect(dashboardPage.myactions).toBeVisible();
    });
    test('Verify Time at work',async({dashboardPage})=>{
        await expect(dashboardPage.timeattitle).toBeVisible();
    });
});