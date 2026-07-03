import {Page, Locator } from "@playwright/test";
export class CartPage{
    readonly page:Page;
    readonly cartlink:Locator;
    readonly productrows:Locator;
    readonly totalprice:Locator;
    readonly placeorderbtn:Locator;
    readonly deletelink:Locator;
    constructor(page:Page){
        this.page=page;
        this.cartlink=page.locator("//a[@id='cartur']");
        this.productrows=page.locator("//tbody[@id='tbodyid']/tr");
        this.totalprice=page.locator("#totalp");
        this.placeorderbtn=page.locator("//button[normalize-space()='Place Order']");
        this.deletelink=page.locator("//a[normalize-space()='Delete']");
    }
    async opencart(){
        await this.cartlink.click();
    }
    async getproductcount(){
        return await this.productrows.count();
    }
    async deletefirstproduct(){
        await this.deletelink.first().click();
    }
    async clickplaceorder(){
        await this.placeorderbtn.click();
    }
}