 const {test,expect} = require('@playwright/test');

 test('home page', async ({page})=>{

    await page.goto('https://www.irctc.com');
   const text =  await page.title();
   console.log('Page Title',text);
   await expect(page).toHaveURL('https://www.irctc.com');
   await expect(page).toHaveTitle('|| IRCTC Corporate Portal ||');
    page.close()

 }



 );