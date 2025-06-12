 const{test,expect}= require('@playwright/test')


 test('framestwo',async({page})=>{


await page.goto("https://ui.vision/demo/webtest/frames/");

const totalFrames = await page.frames();

console.log(totalFrames.length);

const frameOne = await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1.html'});

await frameOne.locator("//input[@name = 'mytext1']").fill('Viswanadh');

await frameOne.waitForTimeout(5000);

 })