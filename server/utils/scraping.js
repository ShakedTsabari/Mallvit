const puppeteer = require('puppeteer');
const fs = require('fs');
const { mallsGroups, oferHebToEng } = require('./mallsGroups');


async function scrapeMalls() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    const mallsToScrape = [];

    for (let mallGr of mallsGroups) {
        if (mallGr.name === "Azrieli") {
            const mallsGroupUrl = mallGr.mallsUrl;
            await page.goto(mallsGroupUrl, { waitUntil: 'networkidle2' });
            const scrapeInstructions = mallGr.scrapingIntruction;
            await page.waitForSelector(scrapeInstructions.mallList);

            const malls = await page.evaluate((scrapeInstructions) => {
                const mallElements = document.querySelectorAll(scrapeInstructions.mall);
                const mallList = [];
                mallElements.forEach(mall => {
                    const name = mall.querySelector(scrapeInstructions.mallFields.name)?.innerText.trim();
                    const title = mall.querySelector(scrapeInstructions.mallFields.title)?.innerText.trim();
                    const address = mall.querySelector(scrapeInstructions.mallFields.adress)?.innerText.trim();
                    const hoursElements = mall.querySelectorAll(scrapeInstructions.mallFields.hours);
                    const hours = Array.from(hoursElements).map(element => element.innerText.trim());
                    const link = mall.querySelector(scrapeInstructions.mallFields.mallPageLink)?.href;

                    mallList.push({ name, title, address, hours, link });
                });
                return mallList;
            }, scrapeInstructions); // Pass scrapeInstructions to page.evaluate

            mallsToScrape.push(...malls);
            console.log(malls);
        }
        if (mallGr.name === "Ofer") {
            const mallsGroupUrl = mallGr.mallsUrl;
            await page.goto(mallsGroupUrl, { waitUntil: 'networkidle2' });
            const scrapeInstructions = mallGr.scrapingIntruction;
            await page.waitForSelector(scrapeInstructions.mallList);

            const malls = await page.evaluate((scrapeInstructions, oferHebToEng, mallsGroupUrl) => {
                const mallElements = document.querySelectorAll(scrapeInstructions.mall);
                const mallList = [];
                mallElements.forEach(mall => {
                    const hebrewName = mall.querySelector(scrapeInstructions.mallFields.name)?.innerText.trim();
                    const name = oferHebToEng[hebrewName];
                    const link = mallsGroupUrl + "/" + name + "/info";
                    mallList.push({ name, link });
                });
                return mallList;
            }, scrapeInstructions, oferHebToEng, mallsGroupUrl);

            mallsToScrape.push(...malls);
            console.log(malls);
        }
    }

    // fs.writeFileSync('moreMalls1.json', JSON.stringify(mallsToScrape, null, 2), 'utf-8');
    console.log("success scraping");
    await browser.close();
}

scrapeMalls();
