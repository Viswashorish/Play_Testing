 const {test,expect} = require('@playwright/test')

 test('HomePage testing',async({page})=>{

await page.goto('https://www.pamten.com/')
 const pageTitle = await page.title();
 console.log('Page title is'+pageTitle);

 await expect(page).toHaveTitle('PamTen | IT strategy | Enterprise Solutions | Cybersecurity solutions | Digital Marketing');

 await expect(page).toHaveURL('https://www.pamten.com/');

 await page.close();

 });