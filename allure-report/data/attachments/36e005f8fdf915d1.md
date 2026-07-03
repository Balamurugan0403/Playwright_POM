# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: logincsv.test.ts >> Login Tests >> Valid Login
- Location: tests\logincsv.test.ts:15:9

# Error details

```
TimeoutError: page.goto: Timeout 10000ms exceeded.
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "networkidle"

```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | export class LoginPage {
  3  |     readonly page: Page;
  4  |     readonly username: Locator;
  5  |     readonly password: Locator;
  6  |     readonly loginButton: Locator;
  7  |     readonly loginTitle: Locator;
  8  |     readonly errorMessage: Locator;
  9  |     constructor(page: Page) {
  10 |         this.page = page;
  11 |         this.username = page.locator('input[name="username"]');
  12 |         this.password = page.locator('input[name="password"]');
  13 |         this.loginButton = page.locator("//button[@type='submit']");
  14 |         this.loginTitle = page.locator("//h5[@class='oxd-text oxd-text--h5 orangehrm-login-title']");
  15 |         this.errorMessage = page.locator("//div[@role='alert']");
  16 | 
  17 |     }
  18 |     async navigate() {
> 19 |         await this.page.goto(process.env.BASE_URL as string,{timeout:10000,waitUntil:'networkidle'});
     |                         ^ TimeoutError: page.goto: Timeout 10000ms exceeded.
  20 |     }
  21 |     async getLoginTitle() {
  22 |         return await this.loginTitle.textContent();
  23 |     }
  24 |     async login(username: string, password: string) {
  25 |         await this.username.fill(username);
  26 |         await this.password.fill(password);
  27 |         await this.loginButton.click();
  28 | 
  29 |     }
  30 |     async getErrorMessage() {
  31 |         return await this.errorMessage.textContent();
  32 |     }
  33 | } 
```