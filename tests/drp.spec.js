const {test,expect}= require('@playwright/test')

test('Validations',async({page})=>{


await page.goto('https://testautomationpractice.blogspot.com/');

await page.locator("#country").click();

await page.locator("#country").selectOption("India");

await page.locator("#country").selectOption({value:"uk"});

await page.waitForTimeout(1000);

await page.selectOption("#country","India");

await page.waitForTimeout(2000);

/*
 const listCountries = await page.$$("//select[@id = 'country']/option");
 console.log(listCountries.length);

 for(const eachCountry of listCountries)
 {
    const countryName = await eachCountry.textContent();

    if(countryName.includes("France"))
    {
        await page.locator("#country").selectOption("France");
        await page.waitForTimeout(2000);
    }
 }


*/

const options = await page.locator("//select[@id = 'country']/option");

await expect(options).toHaveCount(10);

const optionsList = await page.$$("//select[@id = 'country']/option");

await expect(optionsList.length).toBe(10);

const listcountries = await page.locator("#country").textContent();

await expect(listcountries.includes("India")).toBeTruthy();


})