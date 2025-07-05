const{test,expec} = require('@playwright/test')

test('Webtable',async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")

const productTable = await page.locator("#productTable")

const totalcolumns = await productTable.locator("tr th")

const totalrows = await productTable.locator("tbody tr")

console.log(await totalcolumns.count())
console.log(await totalrows.count())

for(let i=0; i<await totalrows.count(); i++)
{
    const eachRow = await totalrows.nth(i);
    const eachValue = eachRow.locator("td");

    for(let j=0 ; j<await eachValue.count()-1; j++)
    {
        console.log(await eachValue.nth(j).textContent())
    }
}

const rowMatch = totalrows.filter({
  has:await page.locator("td"),
  hasText:"Tablet"

})

await rowMatch.locator('input').check()

await page.waitForTimeout(5000)

})