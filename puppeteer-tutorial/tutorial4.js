const puppeteer = require("puppeteer");

async function run(){

    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();

    //Navigate to page
    await page.goto("https://google.com");

    //Extract Images
    const images = await page.$$eval("img",(elements)=>
    elements.map((element)=>({
        src: element.src,
        alt: element.alt,
    }))
    );

    //Extract Links
    const links =await page.$$eval("a",(elements)=>
        elements.map((element)=>({
            href: element.href,
            text: element.textContent,
        }))
    );

    const imagesCount = images.length;
    const linkCount = links.length;

    //Output
    const output = JSON.stringify({images,links,imagesCount,linkCount});
    console.log(output);

    //Close the browser
    await browser.close();

}

run();