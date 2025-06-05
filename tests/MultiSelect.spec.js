const {test,expect}= require('@playwright/test')

test('Validations',async({page})=>{


await page.goto('https://testautomationpractice.blogspot.com/');

await page.locator("#colors").selectOption(['Blue','Green','Yellow']);

const listValues = await page.$$("//Select[@id = 'colors']/option");

for(const eachValue of listValues)
{
     const value = await eachValue.textContent();
     console.log(value);
}

await page.waitForTimeout(5000);

const listcount = await page.locator("//Select[@id = 'colors']/option");

await expect(listcount).toHaveCount(7);


const count = await page.$$("//Select[@id = 'colors']/option");

await expect(count.length).toBe(7);

const listDetails = await page.$$("//Select[@id = 'colors']/option");

await expect(listDetails.includes("Red")).toBeTruthy;

await expect(listDetails.includes("Black")).toBeFalsy;


})

