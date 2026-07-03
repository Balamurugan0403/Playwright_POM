import {test,expect} from '../fixtures/baseFixtures';
import loginData from '../test-data/loginData.json';
test.describe("logout test",async()=>{
    test.beforeEach(async({loginPage})=>{
        await loginPage.navigate();
        await loginPage.login(
            loginData.validUser.username,
            loginData.validUser.password
        );
    });
    test("logout test",async({dashboardPage,loginPage})=>{
        await dashboardPage.clicklogout();
        await expect(loginPage.loginTitle).toHaveText("Login");
    });
});