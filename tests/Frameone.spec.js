const{test,expect} = require('@playwright/test')


test('frameone',async({page})=>{


await page.goto("https://ui.vision/demo/webtest/frames/");

 const totalframesSize = await page.frames();

 console.log(totalframesSize.length);

 const frameone = await page.frame({url :'https://ui.vision/demo/webtest/frames/frame_1.html'});

 await frameone.locator("input[name='mytext1']").fill("Touch chesi choodu");

 await frameone.waitForTimeout(5000);




})