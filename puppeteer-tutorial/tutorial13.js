const puppeteer = require("puppeteer");
const device = puppeteer.KnownDevices['iPhone 13 Pro Max'];


async function setupMobileDevice(){
    const browser = await puppeteer.launch({headless:true});
    const page = await browser.newPage();


    await page.emulate(device);
    await page.goto("http://google.com");
    await page.screenshot({path:'iphone.png'});
    await browser.close();

    
};

setupMobileDevice();