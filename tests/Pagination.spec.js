 const{test,expect}= require('@playwright/test')

 test('Pagination',async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

const bookTable = await page.locator("#productTable");

const columns = await bookTable.locator("thead tr th");

console.log(await columns.count());

 expect(await columns.count()).toBe(4);

const rows = await bookTable.locator("tbody tr");

console.log(await rows.count());

 expect(await rows.count()).toBe(5);

const matchedOne = rows.filter({

    has:await page.locator("td"),
    hasText:"Laptop"
})
await matchedOne.locator('input').check();

await page.waitForTimeout(5000);

 })