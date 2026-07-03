# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: logincsv.test.ts >> Login Tests >> Invalid login
- Location: tests\logincsv.test.ts:26:9

# Error details

```
TimeoutError: page.goto: Timeout 10000ms exceeded.
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "networkidle"

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e6]:
    - img "company-branding" [ref=e8]
    - generic [ref=e9]:
      - heading "Login" [level=5] [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e13]:
          - paragraph [ref=e14]: "Username : Admin"
          - paragraph [ref=e15]: "Password : admin123"
        - generic [ref=e16]:
          - generic [ref=e18]:
            - generic [ref=e19]:
              - generic [ref=e20]: 
              - generic [ref=e21]: Username
            - textbox "Username" [active] [ref=e23]
          - generic [ref=e25]:
            - generic [ref=e26]:
              - generic [ref=e27]: 
              - generic [ref=e28]: Password
            - textbox "Password" [ref=e30]
          - button "Login" [ref=e32] [cursor=pointer]
          - paragraph [ref=e34] [cursor=pointer]: Forgot your password?
      - generic [ref=e35]:
        - generic [ref=e36]:
          - link [ref=e37] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/orangehrm/mycompany/
          - link [ref=e40] [cursor=pointer]:
            - /url: https://www.facebook.com/OrangeHRM/
          - link [ref=e43] [cursor=pointer]:
            - /url: https://twitter.com/orangehrm?lang=en
          - link [ref=e46] [cursor=pointer]:
            - /url: https://www.youtube.com/c/OrangeHRMInc
        - generic [ref=e49]:
          - paragraph [ref=e50]: OrangeHRM OS 5.8
          - paragraph [ref=e51]:
            - text: © 2005 - 2026
            - link "OrangeHRM, Inc" [ref=e52] [cursor=pointer]:
              - /url: http://www.orangehrm.com
            - text: . All rights reserved.
  - img "orangehrm-logo" [ref=e54]
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