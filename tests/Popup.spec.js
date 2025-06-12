 const{test,expect}= require('@playwright/test')

 test.skip('dialog window',async({page})=>{


    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    page.on('dialog', dialog => dialog.accept());


    await page.locator("#alertbtn").click();

    await page.waitForTimeout(5000);




 })

  test('dialog window Popup',async({page})=>{


    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.on('dialog', dialog => dialog.accept('Sonam'));


    await page.locator("#promptBtn").click();

    await page.waitForTimeout(5000);




 })