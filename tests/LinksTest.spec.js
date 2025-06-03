 const{test,expect}= require('@playwright/test')


 test('AllLinksTesting',async({page})=>{

await page.goto('https://demoblaze.com/index.html');

await page.waitForSelector("//div[@id = 'tbodyid']//h4/a");

 const allLinks= await page.$$("//div[@id = 'tbodyid']//h4/a");



 for(const eachLink of allLinks)
 {
    const text = await eachLink.textContent();
    console.log(text);
 }


 })