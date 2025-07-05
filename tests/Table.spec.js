 const{test,expect}= require('@playwright/test')

 test('WebTable',async({page})=>{

 await page.goto("https://testautomationpractice.blogspot.com/")

 const productTable = await page.locator("#productTable");

 const ColumnsCount = await productTable.locator("thead tr th");

 console.log(await ColumnsCount.count())

 const totalRows = await productTable.locator("tbody tr")

 console.log(await totalRows.count())

 for(let i = 0 ; i<await totalRows.count(); i++)
{
    const eachOne = totalRows.nth(i);
    const eachValue = eachOne.locator('td');

    for(let j=0 ; j<await eachValue.count()-1 ; j++)
    {
        console.log(await eachValue.nth(j).textContent())
    }
}

 await productSelect(totalRows,page,"Wireless Earbuds")
 await page.waitForTimeout(5000)

 /*const matched = totalRows.filter({

has:await page.locator("td"),
hasText:"Wireless Earbuds"

 })

await matched.locator("input").check()

*/


 })

 async function productSelect(totalRows,page,name)
 {
    const matchedRow = totalRows.filter({
        has:await page.locator("td"),
        hasText:name
    })

    await matchedRow.locator('input').check()
    
 }