//HTTP interceptors
const puppeteer = require("puppeteer");

async function interceptRequest(url){
    try {
        const browser = await puppeteer.launch({headless:false});
        const page = await browser.newPage();


        //Logic for Request Interception
        await page.setRequestInterception(true);
        page.on('request',(interceptedRequest)=>{
            if(interceptedRequest.url().endsWith('.png')){
                interceptedRequest.abort();
                console.log("Request Aborted.");
            }else{
                interceptedRequest.headers({'secretKey':'abc123'});
                interceptedRequest.continue();
                console.log("Request Continued with Headers");
            }
        });

        await page.goto(url);

        await browser.close();

        console.log("Request interception completed.");
        
    } catch (error) {
     console.log(error);   
    }
}

interceptRequest("https://yahoo.com");
