import { test, expect } from '../fixtures/baseFixtures.js';
import loginData from '../test-data/loginData.json';

test.describe("login test", () => {
    test.beforeEach(async({logindemoPage})=>{
        await logindemoPage.navigate();
    });
    test("login with valid details", async({ logindemoPage }) => {
        await logindemoPage.clicklogin();
        await logindemoPage.filldetails(loginData.validdemo.username, loginData.validdemo.password);
        await expect(logindemoPage.welcomeMessage).toHaveText("Welcome " + loginData.validdemo.username);
    });
    test("login with invalid details ", async({ logindemoPage, page }) => {
        let alertmessage="";
        page.on("dialog",async(dialog)=>{
            alertmessage=dialog.message();
            await dialog.accept();
        });
        await logindemoPage.clicklogin();
        await logindemoPage.filldetails(loginData.invaliddemo.username, loginData.invaliddemo.password);
        await page.waitForTimeout(1000);
        expect(alertmessage).toContain("Wrong password.");
    });
});