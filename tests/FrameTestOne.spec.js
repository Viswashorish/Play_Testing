 const{test,expect} = require('@playwright/test')

 test('frameOne',async({page})=>{

await page.goto("https://ui.vision/demo/webtest/frames/");

 const frameOne = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"});

 await frameOne.locator("input[name='mytext3']").fill("Hary Ram");

  const innearFrame = frameOne.childFrames();

  await innearFrame[0].locator("//div[@id = 'i6']").check();

  innearFrame[0].waitForTimeout(5000);


 })

