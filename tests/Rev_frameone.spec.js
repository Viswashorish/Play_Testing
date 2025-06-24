const{test,expect} = require('@playwright/test')

test('revision on frames',async({page})=>{


await page.goto("https://ui.vision/demo/webtest/frames/");

 const totalframes = await page.frames();

 console.log(totalframes.length);

 const firstFrameName = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"});

 await firstFrameName.locator("input[name='mytext1']").fill("Srinivas Viswanadh Maha");

 await page.waitForTimeout(2000);



})