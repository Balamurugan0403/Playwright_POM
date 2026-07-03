import {test,expect} from '../fixtures/baseFixtures';
import { LoginPage } from '../pages/LoginPage';

import { readLoginData,LoginUser } from "../utils/csvReader";

const users:LoginUser[]=readLoginData();
console.log("CSV Data",users);
const validUser =users.find(user=>user.type==='valid');
const invalidUser=users.find(user=>user.type==='invalid');
test.describe("Login Tests",()=>{
    test.beforeEach(async({loginPage})=>{
        await loginPage.navigate();

    });
    test('Valid Login',async({loginPage,dashboardPage})=>{
        if(!validUser){
            throw new Error('Valid user not found in Logindata.csv')
        }
        await loginPage.login(
            validUser.username,
            validUser.password
        );
        await expect(dashboardPage.dashboardtitle).toHaveText('Dashboard');
        });

    test("Invalid login",async({loginPage})=>{
        if(!invalidUser){
            throw new Error('invalid details not in the logindata.csv');
        }
        await loginPage.login(
            invalidUser.username,
            invalidUser.password
        );
        await expect(loginPage.errorMessage).toHaveText("Invalid credentials", { timeout: 10000 });
    });
})