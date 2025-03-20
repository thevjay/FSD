const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: true,
        slowMo:100,
        args: ["--window-size=1620,1080"],
    });

    const page = await browser.newPage();

    await page.goto("https://namastedev.com/");

    console.log("Webpage Loaded");

    await page.setViewport({ width: 1620, height: 1080 });

    // Target the "Courses" link based on the anchor href attribute
    const coursesPageLink = 'a[href="/learn"]';

    await page.waitForSelector(coursesPageLink);

    await page.click(coursesPageLink);

    console.log("Navigated to Courses page");

    const enrollButton = "button.bg-logo-orange";
    await page.waitForSelector(enrollButton, { visible: true });
    
    await page.evaluate((selector) => {
        document.querySelector(selector)?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, enrollButton);
    
    await page.click(enrollButton);
    console.log("Clicked Enroll Now button");

    // put logs every excution
    // c.log

    // Send logs
    
    await browser.close();


})();


// HomeWork
// Automate whole user journey
// Run this script everyday at 08:00 AM - CRON job
// Collect all the logs and errors send it to email - Amazon SES  acoount