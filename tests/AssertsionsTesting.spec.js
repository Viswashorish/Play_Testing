const{test,expect} = require('@playwright/test')


test('AssertionsVerifying',async({page})=>{


await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F");

const url = "https://demo.nopcommerce.com/register?returnUrl=%2F";

await expect(page).toHaveURL(url);

const titleText = await page.title();

console.log(titleText);

await page.waitForTimeout(5000);

await expect(page).toHaveTitle(titleText);

const register = await page.locator("//h1[contains(text(),'Register')]");

await expect(register).toBeVisible();

const firstName = await page.locator("#FirstName");

await expect(firstName).toBeEnabled();

//await expect(firstName).toBeDisabled();

const yourPersonalDetails = await page.locator("//strong[contains(text(),'Your Personal Details')]");

await expect(yourPersonalDetails).toHaveText("Your Personal Details");

await expect(yourPersonalDetails).toContainText("Your Personal");

await page.locator("//label[contains(text(),'Male')]").check();

const maleRadio = await page.locator("//label[contains(text(),'Male')]");

await expect(maleRadio).toBeChecked();

const totalCount = await page.locator("//a");

await expect(totalCount).toHaveCount(62);

await page.locator("(//div[@class = 'header-menu']/ul//li//a[contains(text(),'Electronics ')])[1]").hover();

await page.waitForTimeout(2000);

await page.locator("(//a[contains(text(),'Camera & photo ')])[1]").click();

await page.waitForTimeout(2000);

await page.locator("//select[@name = 'products-orderby']").click();

const listValues = await page.locator("//select[@name = 'products-orderby']/option");

await expect(listValues).toHaveCount(6);





})