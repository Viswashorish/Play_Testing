 const{test,expect}= require('@playwright/test')

 test('Calendar Popup',async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")

await page.locator("//input[@id='datepicker']").click()

const year = "2028"
const month = "January"
const date = "18"

while(true)
{
    const expectedMonth = await page.locator(".ui-datepicker-month").textContent()
    const expectYear = await page.locator(".ui-datepicker-year").textContent()

    if(expectedMonth == month && expectYear == year)
    {
        break;
    }

    await page.locator("//span[@class='ui-icon ui-icon-circle-triangle-e']").click()
    
}

const selectDate = await page.$$("table tbody tr td a")

for(let eachdate of selectDate)
{
    const dateValue = await eachdate.textContent()
    if(await dateValue == date)
    {
        await eachdate.click()
        await page.waitForTimeout(5000)
    }
}

 })