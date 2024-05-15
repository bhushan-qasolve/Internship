const puppeteer = require("puppeteer");

async function enterFormData(url,searchQuery){
    try {
        const browser = await puppeteer.launch({headless:false});
        const page = await browser.newPage();

        await page.goto(url);

        await page.focus('textarea[name="q"]');

        await page.keyboard.type(searchQuery);

        await page.keyboard.press("Enter");

        await page.waitForNavigation({waitUntil: "networkidle2"});

        await page.screenshot({path:"query.png"});

        await browser.close();

        console.log("Form data submitted successfully.");


    } catch (error) {
        console.log(error);
    }
}


const url = "https://google.com";
const query = "six days";

enterFormData(url,query);