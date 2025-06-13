const{test,expect} = require('@playwright/test')


test('frameone',async({page})=>{


await page.goto("https://ui.vision/demo/webtest/frames/");

 const totalframesSize = await page.frames();

 console.log(totalframesSize.length);

 const frameone = await page.frame({url :'https://ui.vision/demo/webtest/frames/frame_3.html'});

 await frameone.locator("input[name='mytext3']").fill("Touch chesi choodu");

 await frameone.waitForTimeout(5000);

 const childframes = await frameone.childFrames();

 await childframes[0].locator("//*[@id='i6']/div[3]/div").check();

  await frameone.waitForTimeout(5000);




})