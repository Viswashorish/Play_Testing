 const{test,expect}=require('@playwright/test')


 test('datePicket2',async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")

await page.locator("#start-date").click()




 })