const{test,expect}= require('@playwright/test')

test('Popup winodw',async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

await page.on('dialog',dialog=> dialog.accept());

await page.locator("#confirmBtn").click();



})