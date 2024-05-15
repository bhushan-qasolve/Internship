const puppeteer = require("puppeteer");
const fs = require("fs");

async function run(){
    const browser = await puppeteer.launch({headless: true});// time exceeded for  false(browser open) hence used true(browser will not open)
    const page = await browser.newPage();

    // Navigate to page
    await page.goto("http://yahoo.com");

    // SEO related data
    const title = await page.title();
    const metaDescription = await page.$eval('meta[name="description"]',(element) => element.textContent);
    const metaKeywords = await page.$eval('meta[name="keywords"]',(element) => element.textContent);

    // Extract Links
    const links = await page.$$eval("a",(elements)=>
        elements.map((element)=>({
            src: element.href,
            href: element.textContent   

        }))
    );

    //Extract Images 
    const images = await page.$$eval("img",(elements)=>
        elements.map((element)=>({
            src: element.src,
            alt: element.alt

        }))
    );

    // Take Counts of the images and the links
    const imageCount = images.length;
    const linkCount =  links.length;

    //Output
    const outputData ={
        title,
        metaDescription,
        metaKeywords,
        images,
        links,
        imageCount,
        linkCount
    }; 

    // Convert Json into a String
    const outputJSON = JSON.stringify(outputData);

    //Writing output into file
    fs.writeFileSync("result.json",outputJSON);

    await browser.close();

}

run();  