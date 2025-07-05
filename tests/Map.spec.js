const{test,expect}= require('@playwright/test')

test('Calendar Popup',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')

await page.locator("//input[@id = 'datepicker']").click()

const year = "2028"
const month = "January"
const date = "18"

while(true)
{

    const expectedMonth = await page.locator(".ui-datepicker-month").textContent()

    console.log(expectedMonth)

    const expectedYear = await page.locator(".ui-datepicker-year").textContent()

    console.log(expectedYear)

    if(expectedYear == year && expectedMonth == month)
    {
        break;
    }

    await page.locator("//span[@class='ui-icon ui-icon-circle-triangle-e']").click()

}

const allDates = await page.$$("//table[@class = 'ui-datepicker-calendar']/tbody/tr/td/a")

for(let eachDate of allDates)
{
    const eachDateValue = await eachDate.textContent()
    if(eachDateValue == date)
    {
        await eachDate.click()
        await page.waitForTimeout(5000);
    }
}


})