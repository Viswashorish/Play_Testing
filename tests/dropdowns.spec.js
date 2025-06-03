const{test,expect}= require('@playwright/test')

test('dropdowns',async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

const options = await page.locator("//select[@id = 'country']/option");

await expect(options).toHaveCount(10);

const listCount = await page.$$("//select[@id = 'country']/option");

await expect(listCount.length).toBe(10);

//await page.locator("//select[@id = 'country']").selectOption("India");

//await page.locator("//select[@id = 'country']").selectOption({label:"India"});

//await page.locator("//select[@id = 'country']").selectOption({index: 3});

//await page.selectOption("//select[@id = 'country']","India");

/*const listValues = await page.$$("//select[@id = 'country']/option");

for(const eachValue of listValues)
{
   const valueIs = await eachValue.textContent();
   if(valueIs.includes("India"))
   {
    await page.locator("//select[@id = 'country']").selectOption("India");
    break;
   }
}*/

await page.waitForTimeout(4000);


})