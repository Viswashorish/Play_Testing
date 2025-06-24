 const{test,expect}= require('@playwright/test')


 test('firstFrame',async({page})=>{

await page.goto("https://ui.vision/demo/webtest/frames/");

const frameOne = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"});

await frameOne.locator("input[name='mytext3']").fill("I am king");

 const innearFrame = await frameOne.childFrames();

 await innearFrame[0].locator("//div[@id = 'i6']").check();

 await innearFrame[0].waitForTimeout(5000);

 })