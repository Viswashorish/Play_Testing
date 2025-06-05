const {test,expect}= require('@playwright/test')

test('Validations',async({page})=>{


await page.goto('https://www.redbus.in/');

await page.locator("//div[contains(text(),'From')]").click();






await page.locator("//input[@class = 'inputField___df4fdb']").fill('delhi');



//const classname = await page.locator(".suggestionsWrapper___440585").innerHTML();

//console.log(classname);

await page.waitForTimeout(4000);


const classname = await page.locator("//html[1]/body[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]").innerHTML();

console.log(classname);



const list = await page.$$("//div[@class='listItem___5b22df hoverHighlight___cfcd8a ']/div/div/div[1]");

console.log(list.length);

for (const listeachValue of list) {
    let valueis = await listeachValue.textContent();
//console.log(valueis);
    if (valueis.includes("Akshardham Metro Station, Delhi")) {
        await expect(valueis.includes("Akshardham Metro Station, Delhi")).toBeTruthy();
        //await page.waitForSelector("//div[@class='listItem___5b22df hoverHighlight___cfcd8a ']/div/div/div[1]");
        await page.waitForTimeout(5000);
        await listeachValue.click();
        await page.waitForTimeout(6000);
        break;
    }
}



})

