const{test,expect} = require('@playwright/test')


test('AssertionsVerifying',async({page})=>{


await page.goto("https://demo.nopcommerce.com/camera-photo");


await page.waitForTimeout(2000);

await page.locator("//select[@name = 'products-orderby']").click();

const listValues = await page.locator("//select[@name = 'products-orderby']/option");

await expect(listValues).toHaveCount(6);

const ListofValues = await page.$$("//select[@name = 'products-orderby']/option");

for(const eachValue of ListofValues)
{
    const value = await eachValue.textContent();
    console.log(value);
}
await page.close();



})