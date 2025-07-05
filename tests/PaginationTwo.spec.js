 const{test,expect}= require('@playwright/test')

 test('Pagination',async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

const productTable = await page.locator("#productTable");

const totalcolumns = await productTable.locator("thead tr th");

console.log("Total columns :"+await totalcolumns.count());

const totalRows = await productTable.locator("tbody tr");

console.log("TotalRows: "+await totalRows.count());

 const matchedOne= await totalRows.filter({

    has:await page.locator("td"),
    hasText:"Laptop"
})

await matchedOne.locator('input').check();
await page.waitForTimeout(5000);


await selectProduct(totalRows,page,"Smartphone");

await selectProduct(totalRows,page,"Tablet");



//Pagination

const pagination = await page.locator("#pagination li a")
console.log(await pagination.count());

for(let p = 0 ; p<await pagination.count(); p++)
{
    if(p>0)
    {
        await pagination.nth(p).click();
    }

    for(let i=0 ; i<await totalRows.count(); i++)
{
   const eachRow =  totalRows.nth(i);
   const eachValue = eachRow.locator("td");

   for(let j = 0 ; j<await eachValue.count()-1; j++)
   {
      const value = await eachValue.nth(j).textContent();
      console.log(value);
   }
}


}




 })


 async function selectProduct(totalRows,page,name) 
 
 {

     const MatchedTwo= await totalRows.filter({

        has:page.locator("td"),
        hasText:name
    })

    await MatchedTwo.locator('input').check();
    await page.waitForTimeout(2000);
    
 }