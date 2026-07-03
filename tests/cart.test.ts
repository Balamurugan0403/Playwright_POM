import { test, expect } from '../fixtures/baseFixtures.js';

test.describe("cart test", () => {
    test("delete product from cart",async ({ cartPage })=>{
        await cartPage.opencart();
        const initialcount=await cartPage.getproductcount();
        await cartPage.deletefirstproduct();
        const finalcount=await cartPage.getproductcount();
        expect(finalcount).toBeLessThan(initialcount);
    });
});