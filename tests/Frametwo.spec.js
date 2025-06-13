 const{test,expect}= require('@playwright/test')

 test('FrameTwo',async({page})=>{

await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

 const frameOne = await page.frame({url:"https://rahulshettyacademy.com/"});

 await frameOne.locator("//a[@class='new-navbar-highlighter'][normalize-space()='All Access plan']").click();

 const completeText = await frameOne.locator(".text h2").textContent();

 console.log(completeText.split(" ")[1]);



 })