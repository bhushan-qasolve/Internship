const puppeteer =require("puppeteer")

async function generatePDF(url,outputFile){
    try {
        // Launch the browser
        const browser = await puppeteer.launch({headless:false});

        const page = await browser.newPage();

        // Navigate to the page
        await page.goto(url);

        // Generate a PDF
        await page.pdf({path:outputFile,format:"A4"});

        // Close the browser
        await browser.close();
        
    } catch (error) {
        console.log(error);
    }
}

const url = "http://qasolve.ai";
const outputFile="output.pdf";

generatePDF(url,outputFile);

// Doubt not able to retrieve all the data from webpage is it because of the animations in the webpage?