const {test,expect} = require('@playwright/test');

test('irctc home page testing',async({page})=>{


    await page.goto('https://www.irctc.com');

    const text = await page.title();

    console.log('Page Title is: ',text);

    await expect(page).toHaveTitle("|| IRCTC Corporate Portal ||");

    await expect(page).toHaveURL("https://www.irctc.com");

    await page.close();



});