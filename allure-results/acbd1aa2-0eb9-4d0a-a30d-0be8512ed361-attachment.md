# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboard.test.ts >> Dashboard Test >> Verify Time at work
- Location: tests\dashboard.test.ts:18:9

# Error details

```
TimeoutError: page.goto: Timeout 10000ms exceeded.
Call log:
  - navigating to "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login", waiting until "networkidle"

```

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('.oxd-userdropdown-tab')

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
  1  | import {Page, Locator } from "@playwright/test";
  2  | export class DashboardPage{
  3  |     readonly page:Page;
  4  |     readonly dashboardtitle:Locator;
  5  |     readonly timeattitle:Locator;
  6  |     readonly myactions:Locator;
  7  |     readonly profile:Locator;
  8  |     readonly logout:Locator;
  9  |     constructor(page:Page){
  10 |         this.page=page;
  11 |         this.dashboardtitle=page.locator("h6");
  12 |         this.timeattitle=page.locator("//p[normalize-space()='Time at Work']");
  13 |         this.myactions=page.locator("//p[normalize-space()='My Actions']");
  14 |         this.profile=page.locator(".oxd-userdropdown-tab");
  15 |         this.logout=page.locator("//a[normalize-space()='Logout']");
  16 |     }
  17 |     async clicklogout(){
> 18 |         await this.profile.click();
     |                            ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  19 |         await this.logout.click();
  20 | 
  21 |     }
  22 | }
```