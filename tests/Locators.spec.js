const { test,expect } = require("@playwright/test");

test('locators',async({page})=>{


await page.goto('https://demoblaze.com/index.html');

await page.locator('a#login2').click();

await page.locator('input#loginusername').fill('SrinivasViswanadh');

await page.locator('input#loginpassword').fill('Pamten@1890');

await page.locator("//button[contains(text(),'Log in')]").click();

const Logoutlink  = await page.locator("//a[contains(text(),'Log out')]");

console.log('logoutlink'+Logoutlink);

await expect(Logoutlink).toBeVisible();

await page.close();



})