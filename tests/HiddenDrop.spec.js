const {test,expect}= require('@playwright/test')

test('Validations',async({page})=>{


await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

await page.locator("//input[@placeholder='Username']").fill("Admin");

await page.locator("//input[@placeholder='Password']").fill("admin123");

await page.locator("//button[normalize-space()='Login']").click();

await page.locator("//span[normalize-space()='PIM']").click();

await page.locator("//body[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/div[6]/div[1]/div[2]/div[1]/div[1]").click();

await page.waitForTimeout(3000);

const listValues = await page.$$("//div[@role = 'listbox']/div[@role = 'option']/span");

for(const eachValue of listValues)
{
    const valueIs = await eachValue.innerText();
    console.log(valueIs);

    if(valueIs.includes("Account Assistant"))
    {
        await eachValue.click();
        await page.waitForTimeout(3000);
        break;
        
    }
}


})