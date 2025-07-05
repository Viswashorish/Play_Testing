 const{test,expect}= require('@playwright/test')


 test('Table',async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")
//Print number of rows and columns
const table = await page.locator("#productTable")

const totalcolumns = await table.locator("thead tr th")

console.log(await totalcolumns.count())

const totalRows = await table.locator("tbody tr")

console.log(await totalRows.count())

//2) Print each row data
/*
for(let i = 0 ; i<await totalRows.count(); i++)
{
     const eachRow = await totalRows.nth(i)
     const eachValue = await eachRow.locator("td")

     for(let j=0 ; j<await eachValue.count(); j++)
     {
        const valueIs = await eachValue.nth(j).textContent()
        console.log(valueIs)
     }
}*/

//Print each pagination data 

const paginationCount = await page.locator("#pagination li a")

console.log(await paginationCount.count())
/*
for(let p =0; p<await paginationCount.count(); p++)
{
    if(p>0)
    {
        await paginationCount.nth(p).click()
    }

    for(let i = 0 ; i<await totalRows.count(); i++)
{
     const eachRow = await totalRows.nth(i)
     const eachValue = await eachRow.locator("td")

     for(let j=0 ; j<await eachValue.count(); j++)
     {
        const valueIs = await eachValue.nth(j).textContent()
        console.log(valueIs)
     }
}
}*/

const matchedRow = totalRows.filter({

    has:await page.locator("td"),
    hasText:"Smartwatch"
})

await matchedRow.locator('input').check()

await page.waitForTimeout(5000)



 })