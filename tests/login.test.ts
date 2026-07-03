// import { DashboardPage } from "@playwright/test";
import {test,expect} from '../fixtures/baseFixtures';
import loginData from '../test-data/loginData.json';
import { faker } from '@faker-js/faker';
test.describe('Login Tests',()=>{
    test.beforeEach(async({loginPage})=>{
        await loginPage.navigate();
    });
    test('Valid Login',async({loginPage,dashboardPage})=>{
        test.setTimeout(60000);
        await loginPage.login(
            loginData.validUser.username,
            loginData.validUser.password
        );

        await expect(dashboardPage.dashboardtitle).toHaveText("Dashboard",{ timeout:5000 });
    });
    test('Invalid Login',async({loginPage})=>{
         const fakeUser = {
        username: faker.internet.username(),
        password: faker.internet.password()
    };
        await loginPage.login(
            fakeUser.username,
            fakeUser.password
        );
        await expect(loginPage.errorMessage).toHaveText('Invalid credentials');
    });
})