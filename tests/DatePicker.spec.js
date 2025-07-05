 const{test,expect}= require('@playwright/test')

 test('datePicker',async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")



const year = "2026"
const month = "May"
const date = "23"


await page.locator("//input[@id='datepicker']").click()

while(true)
{
    const currentYear = await page.locator("//span[@class= 'ui-datepicker-year']").textContent()
    const currentMonth = await page.locator("//span[@class= 'ui-datepicker-month']").textContent()
    

    if(currentYear.trim()==year  && currentMonth.trim()==month)
    {
        break;
    }

   await page.locator("//span[@class = 'ui-icon ui-icon-circle-triangle-e']").click()
  // await page.waitForTimeout(1000);
}

 
/*const alldates = await page.$$("//a[@class = 'ui-state-default']")

for(const dt of alldates)
{

    if(await dt.textContent() == date)
    {
        await dt.click()
        await page.waitForTimeout(1000);
        break;
    }

     
}
*/

await page.locator(`//a[@class = 'ui-state-default'][text()='${date}']`).click()
await page.waitForTimeout(5000);



 })