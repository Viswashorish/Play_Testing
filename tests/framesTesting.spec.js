 const{test,expect}= require('@playwright/test')


 test('frames testing',async({page})=>{


await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

 const totalFrames = await page.frames();

 console.log(totalFrames.length);

 const framesPage = await page.frameLocator("#courses-iframe");

 await framesPage.locator("//a[@class='new-navbar-highlighter'][normalize-space()='All Access plan']").click();

 const textDetails = await framesPage.locator(".text h2").textContent();

 const textName = await textDetails.split(" ")[1];

 console.log(textName);

 })