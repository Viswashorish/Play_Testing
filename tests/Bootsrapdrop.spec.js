const {test,expect}= require('@playwright/test')

test('Validations',async({page})=>{


await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');

await page.locator("//button[@class = 'multiselect dropdown-toggle btn btn-default']").click();

const options = await page.locator("//ul/li/a/label/input");

await expect(options).toHaveCount(11);

const optionslist = await page.$$("//ul/li/a/label/input");

await expect(optionslist.length).toBe(11);

const optionslistValue = await page.$$("//ul/li/a/label");

for(const eachValue of optionslistValue)
{
    const value = await eachValue.textContent();
    console.log(value);
}

const listValues = await page.$$("//ul/li/a/label");

await expect(listValues.includes("Angular")).toBeTruthy;

const listeach = await page.$$("//ul/li/a/label");

for(const listeachvalue of listeach)
{
    const value = await listeachvalue.textContent();
   if(value.includes("HTML"))
   {
    listeachvalue.click();
   }
}

})

