const puppeteer = require("puppeteer");
const fs = require("fs");
const { log } = require("console");

async function getSourceCode(url,outputData){
    try {

        const browser = await puppeteer.launch({headless:false});

        const page = await browser.newPage();

        await page.goto(url);

        const sourceCode = await page.content();

        fs.writeFileSync(outputData,sourceCode,"utf-8");

        await browser.close();
        console.log("Successfully executed the source code of the url");

        
    } catch (error) {
        console.log("Error getting source code of the url");
    }
}

const url = "http://example.com";
const outputData = "source_code.html";

getSourceCode(url,outputData);