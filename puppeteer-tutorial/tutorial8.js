const puppeteer =require("puppeteer");

async function captureScreenshotAndGeneratePDF(url,outputPath){
    try {
        const browser = await puppeteer.launch({headless:false});

        const page = await browser.newPage();

        await page.goto(url);
        
        await page.screenshot({path:"screenshot.png"});

        await page.pdf({path:outputPath, format:"A4"});

        await browser.close();
        console.log("Successfully captured screenshot and generated PDF.");

        
    } catch (error) {
     console.log("Unable to capture screenshot and generate PDF.",error);   
    }
}

const url = "https://yahoo.com";
const outputPath = "yahoo.pdf";

captureScreenshotAndGeneratePDF(url,outputPath);