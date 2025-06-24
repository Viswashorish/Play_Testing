 const{test,expect}= require('@playwright/test')

 test('columns',async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    const productTable = await page.locator("#productTable");

    const totalColumns = await productTable.locator("thead tr th");

    console.log("Total number of columns: "+await totalColumns.count());

    const totalRows = await productTable.locator("tbody tr");

    console.log("Total number of rows: "+await totalRows.count());

    /*const matched = totalRows.filter({

        has:await page.locator("td"),
        hasText:"Tablet"
    })
    */
    //await matched.locator('input').check();

    await Products(totalRows,page,"Smartphone");
    await Products(totalRows,page,"Laptop");

    await page.waitForTimeout(2500);

   

     const totalPaginationCount = await page.locator(".pagination li a");

 console.log(totalPaginationCount);

 for(let p=0 ; p< await totalPaginationCount.count(); p++)
 {
    if(p>0)
    {
        await totalPaginationCount.nth(p).click();
    }

     for(let  i = 0 ; i<await totalRows.count(); i++)
    {
         const eachRow = totalRows.nth(i);
          const values = eachRow.locator("td");

          for(let j = 0 ; j<await values.count()-1 ; j++)
          {
            console.log(await values.nth(j).textContent());
          }
    }

 }

 })



 async function Products(totalRows,page,name)
 {

    const matched = totalRows.filter({

        has:await page.locator("td"),
        hasText:name

        })


        await matched.locator('input').check();
 }