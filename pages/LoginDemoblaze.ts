import {Page, Locator } from "@playwright/test";
export class LoginDemo{
    readonly page:Page;
    readonly login:Locator;
    readonly username:Locator;
    readonly password:Locator;
    readonly loginbtn:Locator;
    readonly welcomeMessage:Locator;
    constructor(page:Page){
        this.page=page;
        this.login=page.locator("//a[@id='login2']");
        this.username=page.locator("#loginusername");
        this.password=page.locator("#loginpassword");
        this.loginbtn=page.getByRole("button",{name:"Log in"});
        this.welcomeMessage=page.locator("#nameofuser");
    }
    async navigate(){
        await this.page.goto("https://demoblaze.com/index.html");
    }
    async clicklogin(){
        await this.login.click();
    }
    async filldetails(username:string,password:string){
        await this.username.fill(username,{timeout:2000});
        await this.password.fill(password);
        await this.loginbtn.click();
    }
}