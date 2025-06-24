 const {test,expect}= require('@playwright/test')

 test('frametesting',async({page})=>{

await page.goto("https://ui.vision/demo/webtest/frames/");

const frameOne = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"});

await frameOne.locator("input[name='mytext3']").fill("rasmali");

await frameOne.waitForTimeout(2000);

const child = await frameOne.childFrames();

 await child[0].locator("//*[@id='i6']/div[3]/div").check();

await child[0].waitForTimeout(2000);

 })