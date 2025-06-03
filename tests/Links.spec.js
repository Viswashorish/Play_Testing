const{test,expect}= require('@playwright/test')


test('All links',async({page})=>{


    await page.goto('https://demoblaze.com/index.html');

    const alllinkstext = await page.$$('a');

    for(const eachlink of alllinkstext)
    {
        const eachlinktext = await eachlink.textContent();
        console.log(eachlinktext);
    }

    await page.close();



})