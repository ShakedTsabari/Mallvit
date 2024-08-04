const puppeteer = require('puppeteer');
const fs = require('fs');
const { loadConfig } = require('./configLoader');
const { imageHashMap } = require('./ImgToStore');
const {
    scrapeAzrieliMallList,
    scrapeAzrieliStores
} = require('./logics/azrieliMethods');
const {
    scrapeOferMallList,
    scrapeOferStores
} = require('./logics/oferMethods');

const outputFilePath = 'moreMalls.json'; // Path to the output file
const configNames = ['azrieli', 'ofer']; // Add all config names here

async function scrapeMalls(configName) {
    const config = loadConfig(configName);
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    let mallsToScrape = [];
    const scrapeErrors = [];

    // Read the existing data from the file, if it exists
    if (fs.existsSync(outputFilePath)) {
        const existingData = fs.readFileSync(outputFilePath, 'utf-8');
        mallsToScrape = JSON.parse(existingData);
    }

    const mallsGroupUrl = config.mallsUrl;
    const scrapeInstructions = config.scrapingInstructions;

    try {
        await page.goto(mallsGroupUrl, { waitUntil: 'networkidle2' });

        let malls;
        if (config.name === "Azrieli") {
            malls = await scrapeAzrieliMallList(page, scrapeInstructions);
            for (let mall of malls) {
                await scrapeAzrieliStores(page, mall, scrapeInstructions, imageHashMap);
            }
        } else if (config.name === "Ofer") {
            malls = await scrapeOferMallList(page, scrapeInstructions, mallsGroupUrl);
            console.log(malls);
            for (let mall of malls) {
                await scrapeOferStores(page, mall, scrapeInstructions, imageHashMap);
            }
        }

        console.log(`${config.name} scraping: check`);
        mallsToScrape.push(...malls);

    } catch (groupError) {
        console.error(`Error scraping malls group ${config.name}:`, groupError);
        scrapeErrors.push({ groupName: config.name, error: groupError });
    }

    // Write the results to a file
    fs.writeFileSync(outputFilePath, JSON.stringify(mallsToScrape, null, 2), 'utf-8');
    console.log("Scraping process is finished.");
    console.log("Errors encountered during scraping:");
    console.log(scrapeErrors);
    await browser.close();
}

async function main() {
    for (const configName of configNames) {
        console.log(`scraping ${configName}...`);
        await scrapeMalls(configName);
    }
    console.log('All mallsGroups have been scraped.');
}

main();
