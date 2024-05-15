const puppeteer = require("puppeteer");

async function generateScreenshot(url,outputPath){
    try {
        const browser = await puppeteer.launch({headless:false});

        const page = await browser.newPage();

        await page.goto(url);

        await page.screenshot({path:outputPath});

        await browser.close();
        console.log("Screenshot generated successfully.");

        
    } catch (error) {
        console.log("Unable to generate screenshot",error);
    }
}

const url = "http://qasolve.ai";
const outputPath = "qasolve.png";

generateScreenshot(url,outputPath);