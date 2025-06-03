const { test,expect } = require("@playwright/test");

test('Testing',async({page})=>{

await page.goto("https://demoblaze.com/index.html");

const titleText = await page.title();

console.log(titleText);

await expect(page).toHaveURL("https://demoblaze.com/index.html");

await expect(page).toHaveTitle("STORE");

await page.getByRole("link",{name:"Log in"}).click();

await page.locator("#loginusername").fill("SrinivasViswanadh");

await page.locator("#loginpassword").fill("Pamten@1890");

await page.getByRole("button",{name:"Log in"}).click();

await page.waitForSelector("//a[contains(text(),'Welcome Srinivas')]");

const UserName = await page.locator("//a[contains(text(),'Welcome Srinivas')]").textContent();

await console.log(UserName);

await expect(page.locator("//a[contains(text(),'Welcome Srinivas')]")).toHaveText('Welcome SrinivasViswanadh');

await page.close();

//



})