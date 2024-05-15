// Emulating 10 mobile devices

const puppeteer = require("puppeteer");

let device0 = puppeteer.KnownDevices['iPhone 11'];
let device1 = puppeteer.KnownDevices['Galaxy Note 3'];
let device2 = puppeteer.KnownDevices['Galaxy Note II landscape'];
let device3 = puppeteer.KnownDevices['Galaxy Tab S4'];
let device4 = puppeteer.KnownDevices['JioPhone 2'];
let device5 = puppeteer.KnownDevices['Kindle Fire HDX'];
let device6 = puppeteer.KnownDevices['LG Optimus L70'];
let device7 = puppeteer.KnownDevices['Microsoft Lumia 550'];
let device8 = puppeteer.KnownDevices['Nexus 7'];
let device9 = puppeteer.KnownDevices['Pixel 5'];

let devices=[device0,device1,device2,device3,device4,device5,device6,device7,device8,device9];

(async ()=>{
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();

    for(var i=0;i<devices.length;i++){
        await page.emulate(devices[i]);
        await page.goto("https://google.com");
        await page.screenshot({path:i +'.png'});
    }

    await browser.close();
})();