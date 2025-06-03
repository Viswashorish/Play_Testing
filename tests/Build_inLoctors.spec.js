const {test,expect}= require('@playwright/test')

test('Validations',async({page})=>{


await page.goto('https://demoblaze.com/index.html');

//await page.locator("//a[contains(text(),'Log in')]").click();

await page.getByRole("link",{name: "Log in"}).click();

await page.locator('#loginusername').fill("SrinivasViswanadh");

await page.locator('#loginpassword').fill("Pamten@1890");

await page.getByRole("button",{name: "Log in"}).click();

//await page.waitForSelector("//button[contains(text(),'Log in')]");

//await page.locator("//button[contains(text(),'Log in')]").click();

//await page.waitForSelector("#nameofuser");
const TextValue = await page.getByRole("link",{name:"Welcome SrinivasViswanadh"});
//const TextValue = await page.locator("#nameofuser").textContent();

console.log(TextValue);

await page.waitForSelector("//div[@id = 'tbodyid']//h4/a");

 const ListValues = await page.$$("//div[@id = 'tbodyid']//h4/a");

 for(const eachValue of ListValues)
 {
    const value = await eachValue.textContent();
    console.log(value);
 }



})