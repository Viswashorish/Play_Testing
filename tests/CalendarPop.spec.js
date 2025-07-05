const{test,expect} = require('@playwright/test')

test('Calendar',async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")

await page.locator("#datepicker").click()

const selectyear = "2026"

const selectMonth = "August"

const selectdate = "28"



while(true)

    {

        const month = await page.locator(".ui-datepicker-month").textContent()
        const year = await page.locator(".ui-datepicker-year").textContent()


        if(selectyear == year && selectMonth == month)
        {
            break;
        }

        await page.locator("//span[@class='ui-icon ui-icon-circle-triangle-e']").click()
    }

    const date = await page.$$("//tbody/tr/td/a")

    for(let eachdate of date)
    {
        if(await eachdate.textContent()==selectdate)
        {
            await eachdate.click()
            await page.waitForTimeout(4000);
        }
    }



})