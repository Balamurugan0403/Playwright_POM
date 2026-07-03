import {Page, Locator } from "@playwright/test";
export class DashboardPage{
    readonly page:Page;
    readonly dashboardtitle:Locator;
    readonly timeattitle:Locator;
    readonly myactions:Locator;
    readonly profile:Locator;
    readonly logout:Locator;
    constructor(page:Page){
        this.page=page;
        this.dashboardtitle=page.locator("h6");
        this.timeattitle=page.locator("//p[normalize-space()='Time at Work']");
        this.myactions=page.locator("//p[normalize-space()='My Actions']");
        this.profile=page.locator(".oxd-userdropdown-tab");
        this.logout=page.locator("//a[normalize-space()='Logout']");
    }
    async clicklogout(){
        await this.profile.click();
        await this.logout.click();

    }
}