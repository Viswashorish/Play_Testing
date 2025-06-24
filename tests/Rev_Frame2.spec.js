const{test,expect} = require('@playwright/test')

test('FrameTesting',async({page})=>{

await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

const frameOne  = await page.frame("iframe-name");

await frameOne.locator("//a[@class='new-navbar-highlighter'][normalize-space()='All Access plan']").click();

const testOne = await frameOne.locator(".text h2").textContent();

const divideOne = await testOne.split(" ")[1];

console.log(divideOne);

})
