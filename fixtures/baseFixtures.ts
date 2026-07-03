import { LoginDemo } from "./../pages/LoginDemoblaze";   
import { LoginPage } from "./../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";
import { CartPage } from "../pages/CartPage";

import { test as base, expect } from '@playwright/test';
// import { DashboardPage } from "./../pages/DashboardPage";
type Fixtures = {
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    logindemoPage:LoginDemo;
    cartPage:CartPage;
};
export const test = base.extend<Fixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    dashboardPage:async({page},use)=>{
        await use(new DashboardPage(page));
    },
    logindemoPage:async({page},use)=>{
        await use(new LoginDemo(page));
    },
    cartPage:async({page},use)=>{
        await use(new CartPage(page));
    }
});
export { expect };