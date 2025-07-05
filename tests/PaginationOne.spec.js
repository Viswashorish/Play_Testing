 const{test,expect}= require('@playwright/test')


 test('Pagination',async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

const productTable = await page.locator("#productTable");

const totalColumsn = await productTable.locator("th");

console.log("Total Columns: "+await totalColumsn.count());

const totalRows = await productTable.locator("tbody tr");

console.log("Total Number of rows: "+await totalRows.count());

await selectMultipleOptions(totalRows,page,"Wireless Earbuds");

await selectMultipleOptions(totalRows,page,"SmartWatch");


for(let i = 0 ; i<await totalRows.count(); i++)
{
     const eachrow= await totalRows.nth(i);
     const eachrowdata = eachrow.locator("td");

     for(let j = 0 ; j<await eachrowdata.count(); j++)
     {
        console.log(await eachrowdata.nth(j).textContent());
     }
}

 })
 


 async function selectMultipleOptions(totalRows,page,name)
 {
    const matchedOne = totalRows.filter({

        has: await page.locator("td"),

        hasText:name
    })

     await matchedOne.locator('input').check();

     await page.waitForTimeout(5000);

 }